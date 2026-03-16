# GitHub repository creation script
# You need to replace YOUR_USERNAME with your actual GitHub username

$repoName = "portfolio"
$description = "My Portfolio Website"
$username = "vishal7tech"  # Replace with your GitHub username

Write-Host "Creating GitHub repository..." -ForegroundColor Green

# Create repository using GitHub CLI (if available) or manual instructions
try {
    gh repo create $repoName --public --description $description --source=. --push
    Write-Host "Repository created and pushed successfully!" -ForegroundColor Green
    Write-Host "Your portfolio will be available at: https://$username.github.io/$repoName" -ForegroundColor Cyan
} catch {
    Write-Host "GitHub CLI not available. Manual setup required:" -ForegroundColor Yellow
    Write-Host "1. Go to https://github.com/new" -ForegroundColor White
    Write-Host "2. Create repository named '$repoName'" -ForegroundColor White
    Write-Host "3. Run these commands:" -ForegroundColor White
    Write-Host "   git remote add origin https://github.com/$username/$repoName.git" -ForegroundColor Cyan
    Write-Host "   git push -u origin master" -ForegroundColor Cyan
    Write-Host "4. Enable GitHub Pages in repository settings" -ForegroundColor White
}

Write-Host "After setup, enable GitHub Pages:" -ForegroundColor Yellow
Write-Host "1. Go to repository Settings → Pages" -ForegroundColor White
Write-Host "2. Source: Deploy from a branch" -ForegroundColor White
Write-Host "3. Branch: master / (root)" -ForegroundColor White
Write-Host "4. Save and wait 2-5 minutes" -ForegroundColor White
