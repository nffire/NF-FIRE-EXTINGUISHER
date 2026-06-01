$garbled = [string][char]0x00E2 + [string][char]0x201A + [string][char]0x00B9
$files = Get-ChildItem -Path "$PWD\admin" -Filter "*.html"
foreach ($f in $files) {
    $c = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    $count = 0
    $p = $c.IndexOf($garbled)
    while ($p -ge 0) { $count++; $p = $c.IndexOf($garbled, $p + 1) }
    Write-Host ("{0}: {1} garbled rupees" -f $f.Name, $count)
    if ($count -gt 0) {
        $c = $c.Replace($garbled, '&#8377;')
        $utf8BOM = New-Object System.Text.UTF8Encoding($true)
        [System.IO.File]::WriteAllText($f.FullName, $c, $utf8BOM)
        Write-Host "  -> Fixed!"
    }
}
# Also check index.html in the root
$rootFiles = Get-ChildItem -Path "$PWD" -Filter "*.html"
foreach ($f in $rootFiles) {
    $c = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    $count = 0
    $p = $c.IndexOf($garbled)
    while ($p -ge 0) { $count++; $p = $c.IndexOf($garbled, $p + 1) }
    Write-Host ("{0}: {1} garbled rupees" -f $f.Name, $count)
    if ($count -gt 0) {
        $c = $c.Replace($garbled, '&#8377;')
        $utf8BOM = New-Object System.Text.UTF8Encoding($true)
        [System.IO.File]::WriteAllText($f.FullName, $c, $utf8BOM)
        Write-Host "  -> Fixed!"
    }
}
Write-Host "All done."
