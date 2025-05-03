
# UDP Socket Programming

This project demonstrates a simple UDP server implemented in Node.js using the `dgram` module. The server listens for incoming messages and logs them. The communication is done using **`ncat`** (Netcat), a simple networking tool.

## Project Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (which includes npm)
- [ncat](https://nmap.org/ncat/)

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/md2hussain/UDP-Socket-Programming.git
   cd UDP-Socket-Programming
   ```

2. Install the necessary Node.js modules (if any):
   ```bash
   npm install
   ```

## Running the Project

### Start the UDP server:

In the project folder, run the following command to start the server:
```bash
node server.js
```

### Send messages using `ncat`:

Open a new terminal window and use **`ncat`** to send UDP messages to the server:
```bash
ncat -u 127.0.0.1 5500
```
You can replace `127.0.0.1` with the IP address of the server and `5500` with the desired port if different.

### Server Logs:

The server will display the received message along with the sender's IP address and port.

## Example

1. **Run the server:**
   ```bash
   node server.js
   ```

2. **Send a message from `ncat`:**
   ```bash
   ncat -u 127.0.0.1 5500
   ```
   The server will output something like:
   ```bash
   Server received: Hello from Netcat from 127.0.0.1:xxxx
   ```

## Project Structure

```
UDP-Socket-Programming/
│
├── server.js           # The UDP server implementation
├── README.md           # Project documentation
├── .gitignore          # Git ignore file (to ignore node_modules, etc.)
└── package.json        # Node.js project configuration
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
