@echo off
echo Starting Portfolio Website...
echo.

REM Check if pnpm is installed, if not install it
where pnpm >nul 2>nul
if %errorlevel% neq 0 (
    echo pnpm not found. Installing pnpm globally...
    npm install -g pnpm
    if errorlevel 1 (
        echo Failed to install pnpm. Please install Node.js and try again.
        pause
        exit /b 1
    )
    echo pnpm installed successfully!
    echo.
)

REM Check if node_modules exists, if not install dependencies
if not exist "node_modules" (
    echo Installing dependencies...
    pnpm install
    if errorlevel 1 (
        echo Failed to install dependencies.
        pause
        exit /b 1
    )
    echo Dependencies installed successfully!
    echo.
)

REM Start the development server
echo Starting development server...
echo The portfolio will be available at: http://localhost:5173
echo Press Ctrl+C to stop the server
echo.

pnpm vite -- --host

pause
