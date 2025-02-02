# Angular Data Visualization App

## Overview

This is a simple Angular application that allows users to input and visualize temperature data over time. The app consists of two tabs: "Add Data" for entering datetime and temperature values, and "View Data" for displaying this data using a line chart.

## Features

- **Add Data Tab**: 
  - Users can input datetime and temperature values.
  - The datetime must be in the past.
  - The temperature must be between -50°C and 50°C.
  - Users can add multiple entries, which are displayed in a list.

- **View Data Tab**:
  - Displays a line chart of temperature over time.
  - The chart updates in real-time as new data is added.

## Setup Instructions

1. **Install Angular CLI**: 
npm install -g @angular/cli

2. **Clone the Repository**:
git clone <repository-url>
cd angular-data-visualization

3. **Install Dependencies**:
npm install

4. **Run the Application**:
ng serve

The application will be available at `http://localhost:4200`.

## Usage

1. Open the application in a web browser.
2. Navigate to the "Add Data" tab to input datetime and temperature values.
3. Switch to the "View Data" tab to see the data visualized on a chart.

## Technology Stack

- Angular
- Angular Material
- Chart.js

## License

This project is licensed under the MIT License.

7. Final Steps
Run the Application:

Make sure everything works correctly by running ng serve and testing the application in your browser.
