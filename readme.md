# Restful Booker API Testing Automation

This project is a comprehensive API testing automation suite for the [Restful Booker API](https://restful-booker.herokuapp.com), developed as a **collaborative effort** by a team of 4 contributors.

## 🤝 Collaboration Project

This project was developed through the collaborative efforts of:

- **Yahyalt** - Contributor
- **ardimuldian** - Contributor
- **rifqi23ahmad** - Contributor
- **marthawege** - Contributor

## 📋 Project Overview

The Restful Booker API Testing Automation suite provides comprehensive test coverage for all booking-related operations including:

- **Health Check** - API availability verification
- **Authentication** - Token creation and validation
- **Booking Management** - Create, read, update, and delete operations
- **Data Validation** - JSON schema validation and response verification

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime environment
- **Mocha** - Testing framework
- **Chai** - Assertion library
- **Chai-JSON-Schema** - JSON schema validation
- **Axios** - HTTP client for API requests
- **Supertest** - HTTP assertion library
- **Mochawesome** - HTML test reporter
- **Yarn** - Package manager

## 📁 Project Structure

```
├── tests/
│   ├── scenarios/           # Test cases
│   │   ├── createBookingID.test.js
│   │   ├── createToken.test.js
│   │   ├── deleteBooking.test.js
│   │   ├── getAllBookingID.test.js
│   │   ├── getBookingbyID.test.js
│   │   ├── getBookingbyName.test.js
│   │   ├── healthCheck.test.js
│   │   └── updateBook.test.js
│   ├── helper/              # Utility functions
│   │   └── lib-api.js
│   ├── data/                # Test data
│   │   ├── createdbooking.js
│   │   ├── updatedbooking.js
│   │   └── user.data.js
│   ├── pages/               # Page objects/API endpoints
│   └── schema/              # JSON schemas
├── reports/                 # Test reports (generated)
├── package.json
├── .mocharc.json           # Mocha configuration
└── yarn.lock

```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yahyhfidz97/Nest2project.git
   cd Nest2project
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory with necessary configuration (if required).

## 🧪 Running Tests

### Run All Tests
```bash
yarn mocha:test
```

### Run Specific Test Files
```bash
npx mocha tests/scenarios/healthCheck.test.js --reporter mochawesome
```

### Run Tests with Custom Reporter
```bash
npx mocha tests/scenarios --reporter spec
```

## 📊 Test Reports

The project uses **Mochawesome** to generate beautiful HTML reports. After running tests, you can find the reports in the `reports/` directory.

To view the report:
1. Run the tests using `yarn mocha:test`
2. Open `reports/mochawesome.html` in your browser

## 🔧 Configuration

### Mocha Configuration (`.mocharc.json`)
- **Reporter**: Mochawesome for HTML reports
- **Recursive**: Searches for test files in subdirectories
- **ES Module Support**: Configured for modern JavaScript modules
- **Environment Variables**: Automatically loads `.env` file

### Module Aliases
The project uses module aliases for cleaner imports:
- `$root` → `tests/`
- `$helper` → `tests/helper/`

## 📝 Test Scenarios Covered

| Test Scenario | Description |
|---------------|-------------|
| **Health Check** | Verifies API availability and response |
| **Authentication** | Tests token creation and validation |
| **Create Booking** | Tests booking creation with various data sets |
| **Get All Bookings** | Retrieves and validates all booking IDs |
| **Get Booking by ID** | Fetches specific booking details |
| **Get Booking by Name** | Searches bookings by guest name |
| **Update Booking** | Modifies existing booking information |
| **Delete Booking** | Removes booking records |

## 🌐 API Endpoints Tested

- `GET /ping` - Health check
- `POST /auth` - Authentication
- `GET /booking` - Get all booking IDs
- `GET /booking/:id` - Get booking by ID
- `POST /booking` - Create booking
- `PUT /booking/:id` - Update booking
- `DELETE /booking/:id` - Delete booking

## 🤝 Contributing

This project welcomes contributions from all team members. Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-test-case`
3. **Commit changes**: `git commit -m 'Add new test case for...'`
4. **Push to branch**: `git push origin feature/new-test-case`
5. **Create Pull Request**

**Note**: This project demonstrates collaborative software development practices and comprehensive API testing methodologies. It serves as a learning resource for API testing automation using modern JavaScript testing frameworks.
