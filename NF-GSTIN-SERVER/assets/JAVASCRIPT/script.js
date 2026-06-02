const GAS_DEPLOYMENT_URL = "https://script.google.com/macros/s/AKfycbxyMwEH0Y8-bBai2u-xXQ_ZGZT5AW16oXRXPY72ds-HRrwdS9-atj4-Ao9pOV5ONH88EQ/exec";

const btnSearch = document.getElementById('btnSearch');
const searchGstin = document.getElementById('searchGstin');
const boxFound = document.getElementById('boxFound');
const boxNotFound = document.getElementById('boxNotFound');
const lookupSpinner = document.getElementById('lookupSpinner');
const modalOverlay = document.getElementById('modalOverlay');
const btnTriggerAdd = document.getElementById('btnTriggerAdd');
const btnCancel = document.getElementById('btnCancel');
const addForm = document.getElementById('addForm');
const modalGstin = document.getElementById('modalGstin');
const modalName = document.getElementById('modalName');
const modalAddress = document.getElementById('modalAddress');
const btnSave = document.getElementById('btnSave');
const resultOverlay = document.getElementById('resultOverlay');
const resultTitle = document.getElementById('resultTitle');
const resultMessage = document.getElementById('resultMessage');
const resultDetails = document.getElementById('resultDetails');
const resultName = document.getElementById('resultName');
const resultAddress = document.getElementById('resultAddress');
const resultClose = document.getElementById('resultClose');
const resultAddBtn = document.getElementById('resultAddBtn');

function normalizeGstin(value) {
    return value ? value.trim().toUpperCase() : '';
}

function hideStatusBoxes() {
    boxFound.style.display = 'none';
    boxNotFound.style.display = 'none';
}

function showSpinner(show) {
    lookupSpinner.style.display = show ? 'block' : 'none';
}

function toggleOverlay(overlay, show) {
    if (show) {
        overlay.classList.add('active');
    } else {
        overlay.classList.remove('active');
    }
}

function openResultModal(title, message, data = null, showAdd = false) {
    resultTitle.innerText = title;
    resultMessage.innerText = message;

    if (data && data.name && data.address) {
        resultDetails.style.display = 'block';
        resultName.innerText = data.name;
        resultAddress.innerText = data.address;
    } else {
        resultDetails.style.display = 'none';
    }

    resultAddBtn.style.display = showAdd ? 'inline-flex' : 'none';
    toggleOverlay(resultOverlay, true);
}

async function searchGstinRecord() {
    const gstin = normalizeGstin(searchGstin.value);

    if (!gstin || gstin.length !== 15) {
        openResultModal('Invalid GSTIN', 'Please enter a valid 15-character GSTIN before searching.');
        return;
    }

    hideStatusBoxes();
    toggleOverlay(resultOverlay, false);
    showSpinner(true);

    try {
        const response = await fetch(`${GAS_DEPLOYMENT_URL}?action=get&gstin=${encodeURIComponent(gstin)}`, {
            method: 'GET',
            mode: 'cors'
        });

        if (!response.ok) {
            throw new Error('Server returned ' + response.status);
        }

        const result = await response.json();
        showSpinner(false);

        if (result.status === 'success') {
            openResultModal(
                'Company Found',
                'The GSTIN was found in the NF Fire Extinguisher database.',
                { name: result.data.name, address: result.data.address },
                false
            );
        } else {
            openResultModal(
                'Record Not Found',
                'This GSTIN does not exist in the database yet.',
                null,
                true
            );
        }
    } catch (error) {
        showSpinner(false);
        openResultModal(
            'Lookup Failed',
            'Unable to connect to the GAS database. Please check that the web app is deployed and accessible.',
            null,
            false
        );
        console.error('GSTIN lookup error:', error);
    }
}

btnSearch.addEventListener('click', searchGstinRecord);
searchGstin.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchGstinRecord();
    }
});

btnTriggerAdd.addEventListener('click', () => toggleOverlay(modalOverlay, true));
btnCancel.addEventListener('click', () => toggleOverlay(modalOverlay, false));
resultClose.addEventListener('click', () => toggleOverlay(resultOverlay, false));
resultAddBtn.addEventListener('click', () => {
    toggleOverlay(resultOverlay, false);
    toggleOverlay(modalOverlay, true);
});

addForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const gstin = normalizeGstin(modalGstin.value);
    const name = modalName.value.trim();
    const address = modalAddress.value.trim();

    if (!gstin || gstin.length !== 15 || !name || !address) {
        openResultModal('Validation Required', 'Please complete all required fields and use a valid 15-character GSTIN.');
        return;
    }

    btnSave.innerText = 'Saving...';
    btnSave.disabled = true;

    try {
        const formData = new URLSearchParams();
        formData.append('action', 'add');
        formData.append('gstin', gstin);
        formData.append('name', name);
        formData.append('address', address);

        const response = await fetch(GAS_DEPLOYMENT_URL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formData.toString()
        });

        if (!response.ok) {
            throw new Error('Server returned ' + response.status);
        }

        const result = await response.json();
        btnSave.innerText = 'Save Record';
        btnSave.disabled = false;

        if (result.status === 'success') {
            toggleOverlay(modalOverlay, false);
            addForm.reset();
            searchGstin.value = gstin;
            openResultModal(
                'Company Saved',
                'The GSTIN record was stored successfully in the GAS database.',
                { name, address },
                false
            );
        } else {
            openResultModal('Save Failed', 'The database did not accept the record. Please try again.');
        }
    } catch (error) {
        btnSave.innerText = 'Save Record';
        btnSave.disabled = false;
        openResultModal('Save Failed', 'Unable to save the record to the GAS database. Check your deployment and network connection.');
        console.error('Save record error:', error);
    }
});
