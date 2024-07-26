# aelfDevPro

aelfDevPro is a tool designed to enhance the development experience on aelf by providing an AI-powered Natural Language Smart Contract Generator. This tool streamlines and simplifies the development process, making it more efficient and user-friendly for developers.

## Table of Contents

- Introduction
- Features
- Technology Stack
- Installation
- Usage
- Example Inputs and Outputs

## Introduction

aelfDevPro aims to significantly enhance the development experience on aelf by providing an AI-powered tool that generates smart contracts from natural language descriptions. This tool leverages OpenAI's GPT-3.5-turbo model and integrates with Google Cloud Storage for storing generated contracts.

## Features

- **AI-Powered Code Assistance:** Generate smart contracts from natural language descriptions.
- **GCP Integration:** Store generated contracts in Google Cloud Storage.
- **User-Friendly Interface:** Simple and intuitive interface for entering contract requirements and viewing generated contracts.

## Technology Stack

- **Frontend:** React, Axios
- **Backend:** Flask, OpenAI API, Google Cloud Storage
- **Programming Languages:** JavaScript, Python

## Installation

### Prerequisites

- Node.js and npm
- Python
- Google Cloud SDK (for GCP integration)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/aelfDevPro.git
   cd aelfDevPro/backend 

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`

3. Install the required packages:
   ```bash
   pip install -r requirements.txt
   
4. set up your OpenAI API key in config.py :
   ```bash
   OPENAI_API_KEY = 'your-api-key'

5.Run the Flask app:
```bash
python app.py
```


### Frontend Setup
Navigate to the frontend directory:
```bash
cd ../frontend
```

1. Install the required packages:
```bash
npm install
```

2. Run the React app:
```bash
npm start
```

### Usage

Open your browser and navigate to http://localhost:3000.
Enter your contract requirements in natural language and click “Generate”.
View the generated smart contract and its URL.
Example Inputs and Outputs

#### Example 1: Simple Token Contract
Input:
```bash
Create a smart contract for a simple token with the following features:
- Name: MyToken
- Symbol: MTK
- Total Supply: 1,000,000
- Decimals: 18
- Transfer function
```
Expected Output:
```bash
pragma solidity ^0.8.0;

contract MyToken {
    string public name = "MyToken";
    string public symbol = "MTK";
    uint8 public decimals = 18;
    uint256 public totalSupply = 1000000 * (10 ** uint256(decimals));
    mapping(address => uint256) public balanceOf;

    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor() {
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value);
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
}
```

### Netlify Page
You can view the project here aelf.netlify.app
   
