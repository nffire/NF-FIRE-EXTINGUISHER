$path = Resolve-Path .\admin.js
$text = Get-Content $path -Raw
$replacements = @{
  'â€”' = '—',
  'ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“' = '—',
  'ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦' = '...',
  'ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â·' = '·',
  '90Ãƒâ€šÃ‚Â°C' = '90°C',
  'COÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡' = 'CO₂',
  "emoji:'ÃƒÆ’Ã‚Â°Ãƒâ€¦Ã‚Â¸Ãƒâ€šÃ‚Â§Ãƒâ€šÃ‚Â¯'" = "emoji:'shield'",
  "emoji:'ÃƒÆ’Ã‚Â°Ãƒâ€¦Ã‚Â¸Ãƒâ€¦Ã‚Â¡Ãƒâ€šÃ‚Â¨'" = "emoji:'alert'",
  "emoji:'ÃƒÆ’Ã‚Â°Ãƒâ€¦Ã‚Â¸Ãƒâ€šÃ‚ÂÃƒâ€šÃ‚Â³'" = "emoji:'flame'",
  "emoji:'ÃƒÆ’Ã‚Â°Ãƒâ€¦Ã‚Â¸ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒâ€šÃ‚Â§'" = "emoji:'water'",
  "products:'COÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡, FM-200, COÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ Cylinders'" = "products:'CO₂, FM-200, CO₂ Cylinders'"
}
foreach ($find in $replacements.Keys) {
  $text = $text -replace [regex]::Escape($find), $replacements[$find]
}
$text = [regex]::Replace($text, '^//.*DASHBOARD.*$', '// ------------------------------------------------------------ DASHBOARD ------------------------------------------------------------', 'Multiline')
$text = [regex]::Replace($text, '^//.*SALES PIPELINE.*$', '// ------------------------------------------------------------ SALES PIPELINE ------------------------------------------------------------', 'Multiline')
$text = [regex]::Replace($text, '^//.*NOTIFICATION BELL.*$', '// ------------------------------------------------------------ NOTIFICATION BELL ------------------------------------------------------------', 'Multiline')
Set-Content -Path $path -Value $text -Encoding utf8
