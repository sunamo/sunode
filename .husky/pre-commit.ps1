#!/usr/bin/env pwsh

Write-Host "Running tests and updating coverage badge..."

# Clean any JS files from src/ before running tests
Write-Host "Cleaning JavaScript files from src/..."
& pnpm run clean:src-js

# Run tests and capture output
$output = & pnpm test 2>&1 | Out-String

# Extract the total statements coverage percentage from the summary table
$allFilesLine = $output | Select-String "All files" | Select-Object -ExpandProperty Line
Write-Host "All files line: $allFilesLine"

if (-not $allFilesLine) {
    Write-Host "Could not find 'All files' line in test output."
    exit 1
}

# Parse the line: "All files        |   54.48 |    45.45 |   39.28 |   54.48 |"
# We want the second column (% Stmts)
$coverageMatch = $allFilesLine -match '\|\s*([0-9]+\.?[0-9]*)\s*\|'
if (-not $coverageMatch) {
    Write-Host "Could not extract coverage from: $allFilesLine"
    exit 1
}

$coverage = $matches[1]
Write-Host "Test output:"
Write-Host $output
Write-Host "Extracted coverage: $coverage"

if (-not $coverage) {
    Write-Host "Could not determine coverage from test output."
    exit 1
}

# Round to an integer
$coverageInt = [Math]::Round([double]$coverage)

Write-Host "Coverage is $coverageInt%"

# Determine color based on coverage
$color = "red"
if ($coverageInt -ge 80) {
    $color = "green"
} elseif ($coverageInt -ge 50) {
    $color = "yellow"
}

# Update README.md
$readmeContent = Get-Content -path readme.md -Raw
$updatedContent = $readmeContent -replace 'coverage-[0-9]+%25-(red|yellow|green)', "coverage-$coverageInt%25-$color"
Set-Content -path readme.md -Value $updatedContent

# Add the updated readme.md to the commit
& git add readme.md

Write-Host "Coverage badge updated."

exit 0
