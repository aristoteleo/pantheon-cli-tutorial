# Scripting

Learn how to write and use Pantheon-CLI scripts to automate your data analysis workflows.

## Pantheon Script Basics

### Create Script Files
```bash
# Create .pan script file
pantheon script create analysis.pan

# Create using template
pantheon script create --template data-pipeline pipeline.pan
```

### Script Structure
```python
#!/usr/bin/env pantheon
# -*- coding: utf-8 -*-

# Script metadata
@metadata({
    "name": "Data Analysis Script",
    "version": "1.0.0",
    "author": "Your Name",
    "description": "Automated data analysis workflow"
})

# Import required modules
import pantheon as pan
from pantheon.data import Dataset
from pantheon.viz import Plot

# Main function
def main():
    # Load data
    data = pan.load("data.csv")
    
    # Data processing
    cleaned = pan.clean(data)
    
    # Analysis
    results = pan.analyze(cleaned)
    
    # Visualization
    pan.plot(results)
    
    # Export results
    pan.export(results, "output.xlsx")

if __name__ == "__main__":
    main()
```

## Natural Language Scripts

### Hybrid Mode Scripts
```pantheon
# analysis.pan
Load sales data from "sales_2024.csv"
Clean data: remove null values, standardize date format

# Using Python code
df['profit'] = df['revenue'] - df['cost']

Group by month and calculate total revenue
Create monthly revenue trend chart
Export results to "monthly_report.xlsx"
```

### Pure Natural Language Scripts
```pantheon
# simple_analysis.pan
Read customer_data.csv file
Display basic statistics of the data
Find top 10 customers with highest purchase amounts
Create histogram of customer age distribution
Save analysis results as HTML report
```

## Parameterized Scripts

### Accepting Command Line Arguments
```python
#!/usr/bin/env pantheon

import pantheon as pan
import sys

# Get parameters
input_file = sys.argv[1] if len(sys.argv) > 1 else "default.csv"
output_format = sys.argv[2] if len(sys.argv) > 2 else "xlsx"

# Use parameters
data = pan.load(input_file)
results = pan.analyze(data)
pan.export(results, f"output.{output_format}")
```

### Using Configuration Files
```yaml
# config.yaml
data:
  input: "data/*.csv"
  encoding: "utf-8"
  
analysis:
  methods: ["correlation", "regression"]
  confidence: 0.95
  
output:
  format: "html"
  directory: "./results/"
```

```python
# Using configuration in script
config = pan.load_config("config.yaml")
data = pan.load(config['data']['input'])
```

## Error Handling and Logging

### Adding Error Handling
```python
#!/usr/bin/env pantheon

import pantheon as pan
from pantheon.exceptions import DataError, AnalysisError

try:
    # Load data
    data = pan.load("data.csv")
    
    if data.empty:
        raise DataError("Data file is empty")
    
    # Execute analysis
    results = pan.analyze(data)
    
except DataError as e:
    pan.log.error(f"Data error: {e}")
    pan.exit(1)
    
except AnalysisError as e:
    pan.log.error(f"Analysis error: {e}")
    pan.exit(2)
    
except Exception as e:
    pan.log.error(f"Unknown error: {e}")
    pan.exit(3)
```

### Logging
```python
# Configure logging
pan.log.set_level("DEBUG")
pan.log.to_file("analysis.log")

# Use logging
pan.log.info("Starting data analysis")
pan.log.debug(f"Data shape: {data.shape}")
pan.log.warning("Outliers detected")
pan.log.success("Analysis completed")
```

## Modular Scripts

### Creating Reusable Modules
```python
# utils.pan
def clean_data(df):
    """Data cleaning function"""
    df = df.dropna()
    df = df.drop_duplicates()
    return df

def calculate_metrics(df):
    """Calculate key metrics"""
    metrics = {
        'total': df['amount'].sum(),
        'average': df['amount'].mean(),
        'median': df['amount'].median()
    }
    return metrics
```

### Importing and Using Modules
```python
# main.pan
from utils import clean_data, calculate_metrics

data = pan.load("sales.csv")
clean = clean_data(data)
metrics = calculate_metrics(clean)
pan.print(metrics)
```

## Parallel Processing

### Parallel Task Execution
```python
#!/usr/bin/env pantheon

import pantheon as pan
from pantheon.parallel import Pool

def process_file(filename):
    """Process single file"""
    data = pan.load(filename)
    result = pan.analyze(data)
    pan.save(result, f"output_{filename}")
    return f"Completed: {filename}"

# Get all files
files = pan.glob("data/*.csv")

# Parallel processing
with Pool(workers=4) as pool:
    results = pool.map(process_file, files)
    
for result in results:
    pan.log.info(result)
```

## Scheduled Execution

### Creating Scheduled Tasks
```python
# scheduled_task.pan
#!/usr/bin/env pantheon

import pantheon as pan
from pantheon.schedule import every, run_pending
import time

@every(hours=1)
def hourly_analysis():
    """Hourly analysis"""
    data = pan.load_latest("data/*.csv")
    report = pan.quick_analysis(data)
    pan.email(report, to="admin@example.com")

@every(day_at="09:00")
def daily_report():
    """Daily report"""
    pan.run("generate_daily_report.pan")

# Continuous running
while True:
    run_pending()
    time.sleep(60)
```

## Interactive Scripts

### User Input
```python
#!/usr/bin/env pantheon

import pantheon as pan

# Get user input
filename = pan.input("Please enter data filename: ")
analysis_type = pan.select("Select analysis type:", 
    ["Descriptive Statistics", "Correlation Analysis", "Regression Analysis"])

# Confirm operation
if pan.confirm(f"Confirm to perform {analysis_type} on {filename}?"):
    data = pan.load(filename)
    
    if analysis_type == "Descriptive Statistics":
        result = pan.describe(data)
    elif analysis_type == "Correlation Analysis":
        result = pan.correlate(data)
    else:
        result = pan.regress(data)
    
    pan.display(result)
```

## Script Debugging

### Debug Mode
```bash
# Run with debug mode enabled
pantheon run --debug script.pan

# Set breakpoint
pantheon debug script.pan --break 15

# Step execution
pantheon step script.pan
```

### Performance Analysis
```python
# Add performance monitoring
@pan.profile
def slow_function(data):
    # Time-consuming operation
    result = complex_calculation(data)
    return result

# View performance report
pan.performance_report()
```

## Best Practices

### 1. Script Organization
```
project/
├── scripts/
│   ├── main.pan
│   ├── utils/
│   │   ├── data.pan
│   │   └── analysis.pan
│   └── config.yaml
├── data/
└── output/
```

### 2. Documentation and Comments
```python
#!/usr/bin/env pantheon
"""
Data Analysis Main Script

Purpose: Process sales data and generate monthly report
Author: Your Name
Date: 2024-03-15
"""

def process_data(df):
    """
    Process DataFrame
    
    Args:
        df: pandas DataFrame
    
    Returns:
        Processed DataFrame
    """
    # Implementation
    pass
```

### 3. Version Control
```bash
# Initialize Git repository
pantheon git init

# Add scripts
pantheon git add scripts/*.pan

# Commit changes
pantheon git commit -m "Add data analysis scripts"
```

By mastering script writing, you can automate complex analysis workflows and greatly improve work efficiency!