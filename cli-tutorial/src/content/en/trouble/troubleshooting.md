# Troubleshooting

This page helps resolve common issues encountered while using the Pantheon-CLI tutorial.

## Web Tutorial Issues

### Terminal Cannot Load or Display Abnormally

**Symptoms**: The simulated terminal in the page cannot display or interact normally

**Solutions**:
```bash
# Refresh the page
Ctrl+F5 (Windows/Linux) or Cmd+Shift+R (macOS)

# Clear browser cache
# Chrome: Settings → Privacy and security → Clear browsing data
# Firefox: Settings → Privacy & Security → Clear Data
```

### Command Execution is Slow or Unresponsive

**Possible Causes**:
- Network connection issues
- Browser performance limitations
- JavaScript execution errors

**Solutions**:
1. Check network connection
2. Close other browser tabs
3. Use modern browsers (Chrome, Firefox, Safari, Edge)
4. Check browser console for error messages (F12 → Console)

### Copy and Paste Not Working

**Copy and paste in terminal**:
```
# Copy commands
Ctrl+C (after selecting text)

# Paste commands
Ctrl+V or right-click paste

# If not working, try:
Ctrl+Shift+V or Shift+Insert
```

## Browser Compatibility

### Recommended Browser Versions

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Unsupported Browsers

- Internet Explorer (any version)
- Outdated mobile browsers

### Mobile Device Usage

Although the tutorial supports mobile devices, desktop browsers are recommended for the best experience:

- Larger screen for viewing code
- Better keyboard support
- Complete copy and paste functionality

## Learning Environment Setup

### Local Practice Environment

If you want to practice in a local environment, install the following tools:

```bash
# Python environment
python3 --version  # Recommended Python 3.8+

# Data science packages
pip install pandas numpy matplotlib seaborn

# Bioinformatics packages
pip install scanpy anndata

# Jupyter environment
pip install jupyter jupyterlab
```

### Recommended Learning Path

1. **Start with web tutorial** - No installation required, quick start
2. **Try local environment after understanding concepts** - Deep practice
3. **Combined use** - Tutorial learning + local experimentation

## Common Error Solutions

### JavaScript Errors

**Symptoms**: Terminal completely unusable, console shows errors

**Solutions**:
1. Disable browser extensions (especially ad blockers)
2. Try incognito/private mode
3. Update browser to latest version

### Network Timeout

**Symptoms**: Page loads slowly or fails

**Solutions**:
1. Check network connection
2. Try different DNS servers
3. Use mobile hotspot for testing
4. Contact network administrator (enterprise environment)

### Content Display Issues

**Symptoms**: Garbled text, layout disorder

**Solutions**:
```bash
# Check browser encoding settings
# Ensure it's set to UTF-8

# Clear font cache (Windows)
# Control Panel → Fonts → Font settings → Restore default font settings
```

## Getting Help

### Self-Diagnosis

1. **Browser console check**: Press F12 to view error messages
2. **Network status check**: Confirm network connection is normal
3. **Different browser test**: Rule out browser-specific issues

### Feedback Channels

If the problem persists:

1. Check the [Common Errors](./common-errors.md) page
2. Search for related issues in GitHub Issues
3. Submit a bug report including:
   - Browser version and operating system
   - Specific error messages
   - Steps to reproduce
   - Browser console screenshots

### Learning Suggestions

- **Step by step**: Start with basic tutorials
- **Hands-on practice**: Don't just read, do
- **Take notes**: Record important commands and concepts
- **Practice more**: Repetition deepens understanding