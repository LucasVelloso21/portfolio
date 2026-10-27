# Gera curriculo-en.pdf, curriculo-pt.pdf e curriculo-es.pdf na raiz do site a partir dos HTMLs desta pasta.
# Uso: powershell -ExecutionPolicy Bypass -File curriculo\gerar-pdfs.ps1
$edge = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $edge) { throw "Microsoft Edge not found." }

$raiz = Split-Path $PSScriptRoot -Parent
foreach ($idioma in "en", "pt", "es") {
  $origem = "file:///" + ((Join-Path $PSScriptRoot "$idioma.html") -replace "\\", "/")
  $destino = Join-Path $raiz "curriculo-$idioma.pdf"
  & $edge --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="$destino" $origem | Out-Null
  Write-Host "ok  $destino"
}
