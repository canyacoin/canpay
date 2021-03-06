const CanYaCoin = {
  "contractName": "CanYaCoin",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "balances",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "allowed",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalTokens",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "remaining",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506006600a0a6305f5e100026000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610bd38061006d6000396000f3006080604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100bf578063095ea7b31461014f57806318160ddd146101b457806323b872dd146101df57806327e235e314610264578063313ce567146102bb5780635c658165146102e657806370a082311461035d5780637e1c0c09146103b457806395d89b41146103df578063a9059cbb1461046f578063dd62ed3e146104d4575b600080fd5b3480156100cb57600080fd5b506100d461054b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101145780820151818401526020810190506100f9565b50505050905090810190601f1680156101415780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561015b57600080fd5b5061019a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610584565b604051808215151515815260200191505060405180910390f35b3480156101c057600080fd5b506101c9610676565b6040518082815260200191505060405180910390f35b3480156101eb57600080fd5b5061024a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610688565b604051808215151515815260200191505060405180910390f35b34801561027057600080fd5b506102a5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108f5565b6040518082815260200191505060405180910390f35b3480156102c757600080fd5b506102d061090d565b6040518082815260200191505060405180910390f35b3480156102f257600080fd5b50610347600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610912565b6040518082815260200191505060405180910390f35b34801561036957600080fd5b5061039e600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610937565b6040518082815260200191505060405180910390f35b3480156103c057600080fd5b506103c961097f565b6040518082815260200191505060405180910390f35b3480156103eb57600080fd5b506103f461098d565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610434578082015181840152602081019050610419565b50505050905090810190601f1680156104615780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561047b57600080fd5b506104ba600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109c6565b604051808215151515815260200191505060405180910390f35b3480156104e057600080fd5b50610535600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b20565b6040518082815260200191505060405180910390f35b6040805190810160405280600981526020017f43616e5961436f696e000000000000000000000000000000000000000000000081525081565b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60006006600a0a6305f5e10002905090565b6000816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610754575081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b156108e957816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190506108ee565b600090505b9392505050565b60006020528060005260406000206000915090505481565b600681565b6001602052816000526040600020602052806000526040600020600091509150505481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6006600a0a6305f5e1000281565b6040805190810160405280600381526020017f43414e000000000000000000000000000000000000000000000000000000000081525081565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515610b1557816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050610b1a565b600090505b92915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050929150505600a165627a7a72305820c42f57a92c166f0e8bc0bef6e1ae3c1086e4dcf4735605ee4b4cbcd4295a0b670029",
  "deployedBytecode": "0x6080604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100bf578063095ea7b31461014f57806318160ddd146101b457806323b872dd146101df57806327e235e314610264578063313ce567146102bb5780635c658165146102e657806370a082311461035d5780637e1c0c09146103b457806395d89b41146103df578063a9059cbb1461046f578063dd62ed3e146104d4575b600080fd5b3480156100cb57600080fd5b506100d461054b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101145780820151818401526020810190506100f9565b50505050905090810190601f1680156101415780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561015b57600080fd5b5061019a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610584565b604051808215151515815260200191505060405180910390f35b3480156101c057600080fd5b506101c9610676565b6040518082815260200191505060405180910390f35b3480156101eb57600080fd5b5061024a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610688565b604051808215151515815260200191505060405180910390f35b34801561027057600080fd5b506102a5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108f5565b6040518082815260200191505060405180910390f35b3480156102c757600080fd5b506102d061090d565b6040518082815260200191505060405180910390f35b3480156102f257600080fd5b50610347600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610912565b6040518082815260200191505060405180910390f35b34801561036957600080fd5b5061039e600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610937565b6040518082815260200191505060405180910390f35b3480156103c057600080fd5b506103c961097f565b6040518082815260200191505060405180910390f35b3480156103eb57600080fd5b506103f461098d565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610434578082015181840152602081019050610419565b50505050905090810190601f1680156104615780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561047b57600080fd5b506104ba600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109c6565b604051808215151515815260200191505060405180910390f35b3480156104e057600080fd5b50610535600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b20565b6040518082815260200191505060405180910390f35b6040805190810160405280600981526020017f43616e5961436f696e000000000000000000000000000000000000000000000081525081565b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60006006600a0a6305f5e10002905090565b6000816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610754575081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b156108e957816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190506108ee565b600090505b9392505050565b60006020528060005260406000206000915090505481565b600681565b6001602052816000526040600020602052806000526040600020600091509150505481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6006600a0a6305f5e1000281565b6040805190810160405280600381526020017f43414e000000000000000000000000000000000000000000000000000000000081525081565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515610b1557816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050610b1a565b600090505b92915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050929150505600a165627a7a72305820c42f57a92c166f0e8bc0bef6e1ae3c1086e4dcf4735605ee4b4cbcd4295a0b670029",
  "sourceMap": "1967:1731:7:-;;;2342:72;8:9:-1;5:2;;;30:1;27;20:12;5:2;2342:72:7;2141:1;2199:2;:14;2186:9;:28;2373:8;:20;2382:10;2373:20;;;;;;;;;;;;;;;:34;;;;1967:1731;;;;;;",
  "deployedSourceMap": "1967:1731:7:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2016:41;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2016:41:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2016:41:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3346:197;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3346:197:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2420:85;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2420:85:7;;;;;;;;;;;;;;;;;;;;;;;2824:401;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2824:401:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2221:44;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2221:44:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2106:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2106:36:7;;;;;;;;;;;;;;;;;;;;;;;2271:64;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2271:64:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3231:109;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3231:109:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2148:66;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2148:66:7;;;;;;;;;;;;;;;;;;;;;;;2063:37;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2063:37:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2063:37:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2511:307;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2511:307:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3549:146;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3549:146:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2016:41;;;;;;;;;;;;;;;;;;;;:::o;3346:197::-;3413:4;3461:6;3429:7;:19;3437:10;3429:19;;;;;;;;;;;;;;;:29;3449:8;3429:29;;;;;;;;;;;;;;;:38;;;;3498:8;3477:38;;3486:10;3477:38;;;3508:6;3477:38;;;;;;;;;;;;;;;;;;3532:4;3525:11;;3346:197;;;;:::o;2420:85::-;2461:7;2141:1;2199:2;:14;2186:9;:28;2480:18;;2420:85;:::o;2824:401::-;2906:4;2945:6;2926:8;:15;2935:5;2926:15;;;;;;;;;;;;;;;;:25;;:65;;;;;2985:6;2955:7;:14;2963:5;2955:14;;;;;;;;;;;;;;;:26;2970:10;2955:26;;;;;;;;;;;;;;;;:36;;2926:65;2922:275;;;3026:6;3007:8;:15;3016:5;3007:15;;;;;;;;;;;;;;;;:25;;;;;;;;;;;3076:6;3046:7;:14;3054:5;3046:14;;;;;;;;;;;;;;;:26;3061:10;3046:26;;;;;;;;;;;;;;;;:36;;;;;;;;;;;3113:6;3096:8;:13;3105:3;3096:13;;;;;;;;;;;;;;;;:23;;;;;;;;;;;3149:3;3133:28;;3142:5;3133:28;;;3154:6;3133:28;;;;;;;;;;;;;;;;;;3182:4;3175:11;;;;2922:275;3213:5;3206:12;;2824:401;;;;;;:::o;2221:44::-;;;;;;;;;;;;;;;;;:::o;2106:36::-;2141:1;2106:36;:::o;2271:64::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3231:109::-;3291:7;3317:8;:16;3326:6;3317:16;;;;;;;;;;;;;;;;3310:23;;3231:109;;;:::o;2148:66::-;2141:1;2199:2;:14;2186:9;:28;2148:66;:::o;2063:37::-;;;;;;;;;;;;;;;;;;;;:::o;2511:307::-;2574:4;2618:6;2594:8;:20;2603:10;2594:20;;;;;;;;;;;;;;;;:30;;2590:200;;;2664:6;2640:8;:20;2649:10;2640:20;;;;;;;;;;;;;;;;:30;;;;;;;;;;;2701:6;2684:8;:13;2693:3;2684:13;;;;;;;;;;;;;;;;:23;;;;;;;;;;;2742:3;2721:33;;2730:10;2721:33;;;2747:6;2721:33;;;;;;;;;;;;;;;;;;2775:4;2768:11;;;;2590:200;2806:5;2799:12;;2511:307;;;;;:::o;3549:146::-;3627:17;3663:7;:15;3671:6;3663:15;;;;;;;;;;;;;;;:25;3679:8;3663:25;;;;;;;;;;;;;;;;3656:32;;3549:146;;;;:::o",
  "source": "/**\n *  CanYaCoin (CAN) contract (FINAL)\n */\n\npragma solidity ^0.4.15;\n\n\ncontract ERC20TokenInterface {\n\n    /// @return The total amount of tokens\n    function totalSupply() constant returns (uint256 supply);\n\n    /// @param _owner The address from which the balance will be retrieved\n    /// @return The balance\n    function balanceOf(address _owner) constant public returns (uint256 balance);\n\n    /// @notice send `_value` token to `_to` from `msg.sender`\n    /// @param _to The address of the recipient\n    /// @param _value The amount of token to be transferred\n    /// @return Whether the transfer was successful or not\n    function transfer(address _to, uint256 _value) public returns (bool success);\n\n    /// @notice send `_value` token to `_to` from `_from` on the condition it is approved by `_from`\n    /// @param _from The address of the sender\n    /// @param _to The address of the recipient\n    /// @param _value The amount of token to be transferred\n    /// @return Whether the transfer was successful or not\n    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success);\n\n    /// @notice `msg.sender` approves `_spender` to spend `_value` tokens\n    /// @param _spender The address of the account able to transfer the tokens\n    /// @param _value The amount of tokens to be approved for transfer\n    /// @return Whether the approval was successful or not\n    function approve(address _spender, uint256 _value) public returns (bool success);\n\n    /// @param _owner The address of the account owning tokens\n    /// @param _spender The address of the account able to transfer the tokens\n    /// @return Amount of remaining tokens allowed to spent\n    function allowance(address _owner, address _spender) constant public returns (uint256 remaining);\n\n    event Transfer(address indexed from, address indexed to, uint256 value);\n    event Approval(address indexed owner, address indexed spender, uint256 value);\n\n}\n\n\ncontract CanYaCoin is ERC20TokenInterface {\n\n    string public constant name = \"CanYaCoin\";\n    string public constant symbol = \"CAN\";\n    uint256 public constant decimals = 6;\n    uint256 public constant totalTokens = 100000000 * (10 ** decimals);\n\n    mapping (address => uint256) public balances;\n    mapping (address => mapping (address => uint256)) public allowed;\n\n    function CanYaCoin() {\n        balances[msg.sender] = totalTokens;\n    }\n\n    function totalSupply() constant returns (uint256) {\n        return totalTokens;\n    }\n\n    function transfer(address _to, uint256 _value) public returns (bool) {\n        if (balances[msg.sender] >= _value) {\n            balances[msg.sender] -= _value;\n            balances[_to] += _value;\n            Transfer(msg.sender, _to, _value);\n            return true;\n        }\n        return false;\n    }\n\n    function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {\n        if (balances[_from] >= _value && allowed[_from][msg.sender] >= _value) {\n            balances[_from] -= _value;\n            allowed[_from][msg.sender] -= _value;\n            balances[_to] += _value;\n            Transfer(_from, _to, _value);\n            return true;\n        }\n        return false;\n    }\n\n    function balanceOf(address _owner) constant public returns (uint256) {\n        return balances[_owner];\n    }\n\n    function approve(address _spender, uint256 _value) public returns (bool) {\n        allowed[msg.sender][_spender] = _value;\n        Approval(msg.sender, _spender, _value);\n        return true;\n    }\n\n    function allowance(address _owner, address _spender) constant public returns (uint256 remaining) {\n        return allowed[_owner][_spender];\n    }\n\n}",
  "sourcePath": "/Users/user/workspace_work/CanYa/Common/src/contracts/CanYaCoin.sol",
  "ast": {
    "absolutePath": "/Users/user/workspace_work/CanYa/Common/src/contracts/CanYaCoin.sol",
    "exportedSymbols": {
      "CanYaCoin": [
        968
      ],
      "ERC20TokenInterface": [
        762
      ]
    },
    "id": 969,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 695,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".15"
        ],
        "nodeType": "PragmaDirective",
        "src": "46:24:7"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 762,
        "linearizedBaseContracts": [
          762
        ],
        "name": "ERC20TokenInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "@return The total amount of tokens",
            "id": 700,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 696,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "172:2:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 698,
                  "name": "supply",
                  "nodeType": "VariableDeclaration",
                  "scope": 700,
                  "src": "193:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 697,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "193:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "192:16:7"
            },
            "scope": 762,
            "src": "152:57:7",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "@param _owner The address from which the balance will be retrieved\n @return The balance",
            "id": 707,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 702,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 707,
                  "src": "337:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 701,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "337:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "336:16:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 706,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 705,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 707,
                  "src": "378:15:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 704,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "378:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "377:17:7"
            },
            "scope": 762,
            "src": "318:77:7",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "@notice send `_value` token to `_to` from `msg.sender`\n @param _to The address of the recipient\n @param _value The amount of token to be transferred\n @return Whether the transfer was successful or not",
            "id": 716,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 712,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 709,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "649:11:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 708,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "649:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 711,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "662:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 710,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "662:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "648:29:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 715,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 714,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "694:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 713,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "694:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "693:14:7"
            },
            "scope": 762,
            "src": "631:77:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "@notice send `_value` token to `_to` from `_from` on the condition it is approved by `_from`\n @param _from The address of the sender\n @param _to The address of the recipient\n @param _value The amount of token to be transferred\n @return Whether the transfer was successful or not",
            "id": 727,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 718,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 727,
                  "src": "1051:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 717,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1051:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 720,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 727,
                  "src": "1066:11:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 719,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1066:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 722,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 727,
                  "src": "1079:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 721,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1079:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1050:44:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 726,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 725,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 727,
                  "src": "1111:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 724,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1111:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1110:14:7"
            },
            "scope": 762,
            "src": "1029:96:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "@notice `msg.sender` approves `_spender` to spend `_value` tokens\n @param _spender The address of the account able to transfer the tokens\n @param _value The amount of tokens to be approved for transfer\n @return Whether the approval was successful or not",
            "id": 736,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 732,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 729,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 736,
                  "src": "1431:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 728,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1431:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 731,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 736,
                  "src": "1449:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 730,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1449:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1430:34:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 735,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 734,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 736,
                  "src": "1481:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 733,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1481:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1480:14:7"
            },
            "scope": 762,
            "src": "1414:81:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "@param _owner The address of the account owning tokens\n @param _spender The address of the account able to transfer the tokens\n @return Amount of remaining tokens allowed to spent",
            "id": 745,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 738,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 745,
                  "src": "1722:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 737,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1722:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 740,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 745,
                  "src": "1738:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 739,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1738:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1721:34:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 744,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 743,
                  "name": "remaining",
                  "nodeType": "VariableDeclaration",
                  "scope": 745,
                  "src": "1781:17:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 742,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1781:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1780:19:7"
            },
            "scope": 762,
            "src": "1703:97:7",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 753,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 752,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 747,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 753,
                  "src": "1821:20:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 746,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1821:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 749,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 753,
                  "src": "1843:18:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 748,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1843:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 751,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 753,
                  "src": "1863:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 750,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1863:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1820:57:7"
            },
            "src": "1806:72:7"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 761,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 760,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 755,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 761,
                  "src": "1898:21:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 754,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1898:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 757,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 761,
                  "src": "1921:23:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 756,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1921:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 759,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 761,
                  "src": "1946:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 758,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1946:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1897:63:7"
            },
            "src": "1883:78:7"
          }
        ],
        "scope": 969,
        "src": "73:1891:7"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 763,
              "name": "ERC20TokenInterface",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 762,
              "src": "1989:19:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20TokenInterface_$762",
                "typeString": "contract ERC20TokenInterface"
              }
            },
            "id": 764,
            "nodeType": "InheritanceSpecifier",
            "src": "1989:19:7"
          }
        ],
        "contractDependencies": [
          762
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 968,
        "linearizedBaseContracts": [
          968,
          762
        ],
        "name": "CanYaCoin",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 767,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 968,
            "src": "2016:41:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 765,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "2016:6:7",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "43616e5961436f696e",
              "id": 766,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2046:11:7",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_1b0b48cd8f0fea796eb6f03fe11b60f0619a07924e34506b7edbc784c1dacd4a",
                "typeString": "literal_string \"CanYaCoin\""
              },
              "value": "CanYaCoin"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 770,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 968,
            "src": "2063:37:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 768,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "2063:6:7",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "43414e",
              "id": 769,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2095:5:7",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_463fca7d75959de6b3785a626d57fbfbc202be55778cde5a30033d61ae7c09e6",
                "typeString": "literal_string \"CAN\""
              },
              "value": "CAN"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 773,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 968,
            "src": "2106:36:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 771,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2106:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "36",
              "id": 772,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2141:1:7",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_6_by_1",
                "typeString": "int_const 6"
              },
              "value": "6"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 781,
            "name": "totalTokens",
            "nodeType": "VariableDeclaration",
            "scope": 968,
            "src": "2148:66:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 774,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2148:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "id": 780,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "hexValue": "313030303030303030",
                "id": 775,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "2186:9:7",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_100000000_by_1",
                  "typeString": "int_const 100000000"
                },
                "value": "100000000"
              },
              "nodeType": "BinaryOperation",
              "operator": "*",
              "rightExpression": {
                "argumentTypes": null,
                "components": [
                  {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 778,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "hexValue": "3130",
                      "id": 776,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2199:2:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_10_by_1",
                        "typeString": "int_const 10"
                      },
                      "value": "10"
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "**",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 777,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 773,
                      "src": "2205:8:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2199:14:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 779,
                "isConstant": false,
                "isInlineArray": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "TupleExpression",
                "src": "2198:16:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "src": "2186:28:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 785,
            "name": "balances",
            "nodeType": "VariableDeclaration",
            "scope": 968,
            "src": "2221:44:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 784,
              "keyType": {
                "id": 782,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "2230:7:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "2221:28:7",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 783,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2241:7:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 791,
            "name": "allowed",
            "nodeType": "VariableDeclaration",
            "scope": 968,
            "src": "2271:64:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(address => mapping(address => uint256))"
            },
            "typeName": {
              "id": 790,
              "keyType": {
                "id": 786,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "2280:7:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "2271:49:7",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "valueType": {
                "id": 789,
                "keyType": {
                  "id": 787,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2300:7:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "2291:28:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 788,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "2311:7:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 801,
              "nodeType": "Block",
              "src": "2363:51:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 799,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 794,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 785,
                        "src": "2373:8:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 797,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 795,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1388,
                          "src": "2382:3:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 796,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2382:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2373:20:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 798,
                      "name": "totalTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 781,
                      "src": "2396:11:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2373:34:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 800,
                  "nodeType": "ExpressionStatement",
                  "src": "2373:34:7"
                }
              ]
            },
            "documentation": null,
            "id": 802,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "CanYaCoin",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 792,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2360:2:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 793,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2363:0:7"
            },
            "scope": 968,
            "src": "2342:72:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 809,
              "nodeType": "Block",
              "src": "2470:35:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 807,
                    "name": "totalTokens",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 781,
                    "src": "2487:11:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 806,
                  "id": 808,
                  "nodeType": "Return",
                  "src": "2480:18:7"
                }
              ]
            },
            "documentation": null,
            "id": 810,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 803,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2440:2:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 806,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 805,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 810,
                  "src": "2461:7:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 804,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2461:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2460:9:7"
            },
            "scope": 968,
            "src": "2420:85:7",
            "stateMutability": "view",
            "superFunction": 700,
            "visibility": "public"
          },
          {
            "body": {
              "id": 851,
              "nodeType": "Block",
              "src": "2580:238:7",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 824,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 819,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 785,
                        "src": "2594:8:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 822,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 820,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1388,
                          "src": "2603:3:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 821,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2603:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2594:20:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 823,
                      "name": "_value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 814,
                      "src": "2618:6:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2594:30:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 848,
                  "nodeType": "IfStatement",
                  "src": "2590:200:7",
                  "trueBody": {
                    "id": 847,
                    "nodeType": "Block",
                    "src": "2626:164:7",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 830,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 825,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 785,
                              "src": "2640:8:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 828,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 826,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1388,
                                "src": "2649:3:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 827,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2649:10:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2640:20:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 829,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 814,
                            "src": "2664:6:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2640:30:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 831,
                        "nodeType": "ExpressionStatement",
                        "src": "2640:30:7"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 836,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 832,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 785,
                              "src": "2684:8:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 834,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 833,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 812,
                              "src": "2693:3:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2684:13:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 835,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 814,
                            "src": "2701:6:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2684:23:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 837,
                        "nodeType": "ExpressionStatement",
                        "src": "2684:23:7"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 839,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1388,
                                "src": "2730:3:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 840,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2730:10:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 841,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 812,
                              "src": "2742:3:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 842,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 814,
                              "src": "2747:6:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 838,
                            "name": "Transfer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 753,
                            "src": "2721:8:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 843,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2721:33:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 844,
                        "nodeType": "ExpressionStatement",
                        "src": "2721:33:7"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 845,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2775:4:7",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 818,
                        "id": 846,
                        "nodeType": "Return",
                        "src": "2768:11:7"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 849,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2806:5:7",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 818,
                  "id": 850,
                  "nodeType": "Return",
                  "src": "2799:12:7"
                }
              ]
            },
            "documentation": null,
            "id": 852,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 815,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 812,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 852,
                  "src": "2529:11:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 811,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2529:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 814,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 852,
                  "src": "2542:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 813,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2542:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2528:29:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 818,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 817,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 852,
                  "src": "2574:4:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 816,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2574:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2573:6:7"
            },
            "scope": 968,
            "src": "2511:307:7",
            "stateMutability": "nonpayable",
            "superFunction": 716,
            "visibility": "public"
          },
          {
            "body": {
              "id": 910,
              "nodeType": "Block",
              "src": "2912:313:7",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 876,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 867,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 863,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 785,
                          "src": "2926:8:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 865,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 864,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 854,
                          "src": "2935:5:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2926:15:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 866,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 858,
                        "src": "2945:6:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2926:25:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 875,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 868,
                            "name": "allowed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 791,
                            "src": "2955:7:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(address => mapping(address => uint256))"
                            }
                          },
                          "id": 870,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 869,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 854,
                            "src": "2963:5:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2955:14:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 873,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 871,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1388,
                            "src": "2970:3:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 872,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2970:10:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2955:26:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 874,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 858,
                        "src": "2985:6:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2955:36:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "2926:65:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 907,
                  "nodeType": "IfStatement",
                  "src": "2922:275:7",
                  "trueBody": {
                    "id": 906,
                    "nodeType": "Block",
                    "src": "2993:204:7",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 881,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 877,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 785,
                              "src": "3007:8:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 879,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 878,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 854,
                              "src": "3016:5:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "3007:15:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 880,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 858,
                            "src": "3026:6:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3007:25:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 882,
                        "nodeType": "ExpressionStatement",
                        "src": "3007:25:7"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 890,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 883,
                                "name": "allowed",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 791,
                                "src": "3046:7:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(address => uint256))"
                                }
                              },
                              "id": 887,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 884,
                                "name": "_from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 854,
                                "src": "3054:5:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3046:14:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 888,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 885,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1388,
                                "src": "3061:3:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 886,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3061:10:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "3046:26:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 889,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 858,
                            "src": "3076:6:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3046:36:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 891,
                        "nodeType": "ExpressionStatement",
                        "src": "3046:36:7"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 896,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 892,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 785,
                              "src": "3096:8:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 894,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 893,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 856,
                              "src": "3105:3:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "3096:13:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 895,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 858,
                            "src": "3113:6:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3096:23:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 897,
                        "nodeType": "ExpressionStatement",
                        "src": "3096:23:7"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 899,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 854,
                              "src": "3142:5:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 900,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 856,
                              "src": "3149:3:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 901,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 858,
                              "src": "3154:6:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 898,
                            "name": "Transfer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 753,
                            "src": "3133:8:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 902,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3133:28:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 903,
                        "nodeType": "ExpressionStatement",
                        "src": "3133:28:7"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 904,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3182:4:7",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 862,
                        "id": 905,
                        "nodeType": "Return",
                        "src": "3175:11:7"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 908,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3213:5:7",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 862,
                  "id": 909,
                  "nodeType": "Return",
                  "src": "3206:12:7"
                }
              ]
            },
            "documentation": null,
            "id": 911,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 854,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 911,
                  "src": "2846:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 853,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2846:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 856,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 911,
                  "src": "2861:11:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 855,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2861:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 858,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 911,
                  "src": "2874:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 857,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2874:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2845:44:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 862,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 861,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 911,
                  "src": "2906:4:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 860,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2906:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2905:6:7"
            },
            "scope": 968,
            "src": "2824:401:7",
            "stateMutability": "nonpayable",
            "superFunction": 727,
            "visibility": "public"
          },
          {
            "body": {
              "id": 922,
              "nodeType": "Block",
              "src": "3300:40:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 918,
                      "name": "balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 785,
                      "src": "3317:8:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 920,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 919,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 913,
                      "src": "3326:6:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3317:16:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 917,
                  "id": 921,
                  "nodeType": "Return",
                  "src": "3310:23:7"
                }
              ]
            },
            "documentation": null,
            "id": 923,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 914,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 913,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 923,
                  "src": "3250:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 912,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3250:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3249:16:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 917,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 916,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 923,
                  "src": "3291:7:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 915,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3291:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3290:9:7"
            },
            "scope": 968,
            "src": "3231:109:7",
            "stateMutability": "view",
            "superFunction": 707,
            "visibility": "public"
          },
          {
            "body": {
              "id": 950,
              "nodeType": "Block",
              "src": "3419:124:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 939,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 932,
                          "name": "allowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 791,
                          "src": "3429:7:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 936,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 933,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1388,
                            "src": "3437:3:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 934,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3437:10:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3429:19:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 937,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 935,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 925,
                        "src": "3449:8:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3429:29:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 938,
                      "name": "_value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 927,
                      "src": "3461:6:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3429:38:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 940,
                  "nodeType": "ExpressionStatement",
                  "src": "3429:38:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 942,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1388,
                          "src": "3486:3:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 943,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3486:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 944,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 925,
                        "src": "3498:8:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 945,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 927,
                        "src": "3508:6:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 941,
                      "name": "Approval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 761,
                      "src": "3477:8:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 946,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3477:38:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 947,
                  "nodeType": "ExpressionStatement",
                  "src": "3477:38:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 948,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3532:4:7",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 931,
                  "id": 949,
                  "nodeType": "Return",
                  "src": "3525:11:7"
                }
              ]
            },
            "documentation": null,
            "id": 951,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 928,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 925,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 951,
                  "src": "3363:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 924,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3363:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 927,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 951,
                  "src": "3381:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 926,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3381:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3362:34:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 931,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 930,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 951,
                  "src": "3413:4:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 929,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3413:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3412:6:7"
            },
            "scope": 968,
            "src": "3346:197:7",
            "stateMutability": "nonpayable",
            "superFunction": 736,
            "visibility": "public"
          },
          {
            "body": {
              "id": 966,
              "nodeType": "Block",
              "src": "3646:49:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 960,
                        "name": "allowed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 791,
                        "src": "3663:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                          "typeString": "mapping(address => mapping(address => uint256))"
                        }
                      },
                      "id": 962,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 961,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 953,
                        "src": "3671:6:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3663:15:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 964,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 963,
                      "name": "_spender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 955,
                      "src": "3679:8:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3663:25:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 959,
                  "id": 965,
                  "nodeType": "Return",
                  "src": "3656:32:7"
                }
              ]
            },
            "documentation": null,
            "id": 967,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 956,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 953,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 967,
                  "src": "3568:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 952,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3568:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 955,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 967,
                  "src": "3584:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 954,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3584:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3567:34:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 959,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 958,
                  "name": "remaining",
                  "nodeType": "VariableDeclaration",
                  "scope": 967,
                  "src": "3627:17:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 957,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3627:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3626:19:7"
            },
            "scope": 968,
            "src": "3549:146:7",
            "stateMutability": "view",
            "superFunction": 745,
            "visibility": "public"
          }
        ],
        "scope": 969,
        "src": "1967:1731:7"
      }
    ],
    "src": "46:3652:7"
  },
  "legacyAST": {
    "absolutePath": "/Users/user/workspace_work/CanYa/Common/src/contracts/CanYaCoin.sol",
    "exportedSymbols": {
      "CanYaCoin": [
        968
      ],
      "ERC20TokenInterface": [
        762
      ]
    },
    "id": 969,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 695,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".15"
        ],
        "nodeType": "PragmaDirective",
        "src": "46:24:7"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 762,
        "linearizedBaseContracts": [
          762
        ],
        "name": "ERC20TokenInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "@return The total amount of tokens",
            "id": 700,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 696,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "172:2:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 698,
                  "name": "supply",
                  "nodeType": "VariableDeclaration",
                  "scope": 700,
                  "src": "193:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 697,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "193:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "192:16:7"
            },
            "scope": 762,
            "src": "152:57:7",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "@param _owner The address from which the balance will be retrieved\n @return The balance",
            "id": 707,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 702,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 707,
                  "src": "337:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 701,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "337:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "336:16:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 706,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 705,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 707,
                  "src": "378:15:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 704,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "378:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "377:17:7"
            },
            "scope": 762,
            "src": "318:77:7",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "@notice send `_value` token to `_to` from `msg.sender`\n @param _to The address of the recipient\n @param _value The amount of token to be transferred\n @return Whether the transfer was successful or not",
            "id": 716,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 712,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 709,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "649:11:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 708,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "649:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 711,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "662:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 710,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "662:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "648:29:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 715,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 714,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "694:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 713,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "694:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "693:14:7"
            },
            "scope": 762,
            "src": "631:77:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "@notice send `_value` token to `_to` from `_from` on the condition it is approved by `_from`\n @param _from The address of the sender\n @param _to The address of the recipient\n @param _value The amount of token to be transferred\n @return Whether the transfer was successful or not",
            "id": 727,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 718,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 727,
                  "src": "1051:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 717,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1051:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 720,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 727,
                  "src": "1066:11:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 719,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1066:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 722,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 727,
                  "src": "1079:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 721,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1079:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1050:44:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 726,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 725,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 727,
                  "src": "1111:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 724,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1111:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1110:14:7"
            },
            "scope": 762,
            "src": "1029:96:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "@notice `msg.sender` approves `_spender` to spend `_value` tokens\n @param _spender The address of the account able to transfer the tokens\n @param _value The amount of tokens to be approved for transfer\n @return Whether the approval was successful or not",
            "id": 736,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 732,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 729,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 736,
                  "src": "1431:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 728,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1431:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 731,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 736,
                  "src": "1449:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 730,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1449:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1430:34:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 735,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 734,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 736,
                  "src": "1481:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 733,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1481:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1480:14:7"
            },
            "scope": 762,
            "src": "1414:81:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "@param _owner The address of the account owning tokens\n @param _spender The address of the account able to transfer the tokens\n @return Amount of remaining tokens allowed to spent",
            "id": 745,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 738,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 745,
                  "src": "1722:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 737,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1722:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 740,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 745,
                  "src": "1738:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 739,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1738:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1721:34:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 744,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 743,
                  "name": "remaining",
                  "nodeType": "VariableDeclaration",
                  "scope": 745,
                  "src": "1781:17:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 742,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1781:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1780:19:7"
            },
            "scope": 762,
            "src": "1703:97:7",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 753,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 752,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 747,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 753,
                  "src": "1821:20:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 746,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1821:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 749,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 753,
                  "src": "1843:18:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 748,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1843:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 751,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 753,
                  "src": "1863:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 750,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1863:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1820:57:7"
            },
            "src": "1806:72:7"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 761,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 760,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 755,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 761,
                  "src": "1898:21:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 754,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1898:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 757,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 761,
                  "src": "1921:23:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 756,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1921:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 759,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 761,
                  "src": "1946:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 758,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1946:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1897:63:7"
            },
            "src": "1883:78:7"
          }
        ],
        "scope": 969,
        "src": "73:1891:7"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 763,
              "name": "ERC20TokenInterface",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 762,
              "src": "1989:19:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20TokenInterface_$762",
                "typeString": "contract ERC20TokenInterface"
              }
            },
            "id": 764,
            "nodeType": "InheritanceSpecifier",
            "src": "1989:19:7"
          }
        ],
        "contractDependencies": [
          762
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 968,
        "linearizedBaseContracts": [
          968,
          762
        ],
        "name": "CanYaCoin",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 767,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 968,
            "src": "2016:41:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 765,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "2016:6:7",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "43616e5961436f696e",
              "id": 766,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2046:11:7",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_1b0b48cd8f0fea796eb6f03fe11b60f0619a07924e34506b7edbc784c1dacd4a",
                "typeString": "literal_string \"CanYaCoin\""
              },
              "value": "CanYaCoin"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 770,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 968,
            "src": "2063:37:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 768,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "2063:6:7",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "43414e",
              "id": 769,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2095:5:7",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_463fca7d75959de6b3785a626d57fbfbc202be55778cde5a30033d61ae7c09e6",
                "typeString": "literal_string \"CAN\""
              },
              "value": "CAN"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 773,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 968,
            "src": "2106:36:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 771,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2106:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "36",
              "id": 772,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2141:1:7",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_6_by_1",
                "typeString": "int_const 6"
              },
              "value": "6"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 781,
            "name": "totalTokens",
            "nodeType": "VariableDeclaration",
            "scope": 968,
            "src": "2148:66:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 774,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2148:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "id": 780,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "hexValue": "313030303030303030",
                "id": 775,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "2186:9:7",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_100000000_by_1",
                  "typeString": "int_const 100000000"
                },
                "value": "100000000"
              },
              "nodeType": "BinaryOperation",
              "operator": "*",
              "rightExpression": {
                "argumentTypes": null,
                "components": [
                  {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 778,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "hexValue": "3130",
                      "id": 776,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2199:2:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_10_by_1",
                        "typeString": "int_const 10"
                      },
                      "value": "10"
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "**",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 777,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 773,
                      "src": "2205:8:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2199:14:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 779,
                "isConstant": false,
                "isInlineArray": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "TupleExpression",
                "src": "2198:16:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "src": "2186:28:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 785,
            "name": "balances",
            "nodeType": "VariableDeclaration",
            "scope": 968,
            "src": "2221:44:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 784,
              "keyType": {
                "id": 782,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "2230:7:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "2221:28:7",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 783,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2241:7:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 791,
            "name": "allowed",
            "nodeType": "VariableDeclaration",
            "scope": 968,
            "src": "2271:64:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(address => mapping(address => uint256))"
            },
            "typeName": {
              "id": 790,
              "keyType": {
                "id": 786,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "2280:7:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "2271:49:7",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "valueType": {
                "id": 789,
                "keyType": {
                  "id": 787,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2300:7:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "2291:28:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 788,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "2311:7:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 801,
              "nodeType": "Block",
              "src": "2363:51:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 799,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 794,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 785,
                        "src": "2373:8:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 797,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 795,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1388,
                          "src": "2382:3:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 796,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2382:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2373:20:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 798,
                      "name": "totalTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 781,
                      "src": "2396:11:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2373:34:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 800,
                  "nodeType": "ExpressionStatement",
                  "src": "2373:34:7"
                }
              ]
            },
            "documentation": null,
            "id": 802,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "CanYaCoin",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 792,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2360:2:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 793,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2363:0:7"
            },
            "scope": 968,
            "src": "2342:72:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 809,
              "nodeType": "Block",
              "src": "2470:35:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 807,
                    "name": "totalTokens",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 781,
                    "src": "2487:11:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 806,
                  "id": 808,
                  "nodeType": "Return",
                  "src": "2480:18:7"
                }
              ]
            },
            "documentation": null,
            "id": 810,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 803,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2440:2:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 806,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 805,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 810,
                  "src": "2461:7:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 804,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2461:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2460:9:7"
            },
            "scope": 968,
            "src": "2420:85:7",
            "stateMutability": "view",
            "superFunction": 700,
            "visibility": "public"
          },
          {
            "body": {
              "id": 851,
              "nodeType": "Block",
              "src": "2580:238:7",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 824,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 819,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 785,
                        "src": "2594:8:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 822,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 820,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1388,
                          "src": "2603:3:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 821,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2603:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2594:20:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 823,
                      "name": "_value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 814,
                      "src": "2618:6:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2594:30:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 848,
                  "nodeType": "IfStatement",
                  "src": "2590:200:7",
                  "trueBody": {
                    "id": 847,
                    "nodeType": "Block",
                    "src": "2626:164:7",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 830,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 825,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 785,
                              "src": "2640:8:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 828,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 826,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1388,
                                "src": "2649:3:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 827,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2649:10:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2640:20:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 829,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 814,
                            "src": "2664:6:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2640:30:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 831,
                        "nodeType": "ExpressionStatement",
                        "src": "2640:30:7"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 836,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 832,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 785,
                              "src": "2684:8:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 834,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 833,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 812,
                              "src": "2693:3:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2684:13:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 835,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 814,
                            "src": "2701:6:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2684:23:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 837,
                        "nodeType": "ExpressionStatement",
                        "src": "2684:23:7"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 839,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1388,
                                "src": "2730:3:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 840,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2730:10:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 841,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 812,
                              "src": "2742:3:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 842,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 814,
                              "src": "2747:6:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 838,
                            "name": "Transfer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 753,
                            "src": "2721:8:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 843,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2721:33:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 844,
                        "nodeType": "ExpressionStatement",
                        "src": "2721:33:7"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 845,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2775:4:7",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 818,
                        "id": 846,
                        "nodeType": "Return",
                        "src": "2768:11:7"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 849,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2806:5:7",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 818,
                  "id": 850,
                  "nodeType": "Return",
                  "src": "2799:12:7"
                }
              ]
            },
            "documentation": null,
            "id": 852,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 815,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 812,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 852,
                  "src": "2529:11:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 811,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2529:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 814,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 852,
                  "src": "2542:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 813,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2542:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2528:29:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 818,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 817,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 852,
                  "src": "2574:4:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 816,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2574:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2573:6:7"
            },
            "scope": 968,
            "src": "2511:307:7",
            "stateMutability": "nonpayable",
            "superFunction": 716,
            "visibility": "public"
          },
          {
            "body": {
              "id": 910,
              "nodeType": "Block",
              "src": "2912:313:7",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 876,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 867,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 863,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 785,
                          "src": "2926:8:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 865,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 864,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 854,
                          "src": "2935:5:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2926:15:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 866,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 858,
                        "src": "2945:6:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2926:25:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 875,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 868,
                            "name": "allowed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 791,
                            "src": "2955:7:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(address => mapping(address => uint256))"
                            }
                          },
                          "id": 870,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 869,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 854,
                            "src": "2963:5:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2955:14:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 873,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 871,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1388,
                            "src": "2970:3:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 872,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2970:10:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2955:26:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 874,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 858,
                        "src": "2985:6:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2955:36:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "2926:65:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 907,
                  "nodeType": "IfStatement",
                  "src": "2922:275:7",
                  "trueBody": {
                    "id": 906,
                    "nodeType": "Block",
                    "src": "2993:204:7",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 881,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 877,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 785,
                              "src": "3007:8:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 879,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 878,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 854,
                              "src": "3016:5:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "3007:15:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 880,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 858,
                            "src": "3026:6:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3007:25:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 882,
                        "nodeType": "ExpressionStatement",
                        "src": "3007:25:7"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 890,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 883,
                                "name": "allowed",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 791,
                                "src": "3046:7:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(address => uint256))"
                                }
                              },
                              "id": 887,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 884,
                                "name": "_from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 854,
                                "src": "3054:5:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3046:14:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 888,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 885,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1388,
                                "src": "3061:3:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 886,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3061:10:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "3046:26:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 889,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 858,
                            "src": "3076:6:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3046:36:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 891,
                        "nodeType": "ExpressionStatement",
                        "src": "3046:36:7"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 896,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 892,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 785,
                              "src": "3096:8:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 894,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 893,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 856,
                              "src": "3105:3:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "3096:13:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 895,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 858,
                            "src": "3113:6:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3096:23:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 897,
                        "nodeType": "ExpressionStatement",
                        "src": "3096:23:7"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 899,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 854,
                              "src": "3142:5:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 900,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 856,
                              "src": "3149:3:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 901,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 858,
                              "src": "3154:6:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 898,
                            "name": "Transfer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 753,
                            "src": "3133:8:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 902,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3133:28:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 903,
                        "nodeType": "ExpressionStatement",
                        "src": "3133:28:7"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 904,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3182:4:7",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 862,
                        "id": 905,
                        "nodeType": "Return",
                        "src": "3175:11:7"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 908,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3213:5:7",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 862,
                  "id": 909,
                  "nodeType": "Return",
                  "src": "3206:12:7"
                }
              ]
            },
            "documentation": null,
            "id": 911,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 854,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 911,
                  "src": "2846:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 853,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2846:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 856,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 911,
                  "src": "2861:11:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 855,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2861:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 858,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 911,
                  "src": "2874:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 857,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2874:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2845:44:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 862,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 861,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 911,
                  "src": "2906:4:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 860,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2906:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2905:6:7"
            },
            "scope": 968,
            "src": "2824:401:7",
            "stateMutability": "nonpayable",
            "superFunction": 727,
            "visibility": "public"
          },
          {
            "body": {
              "id": 922,
              "nodeType": "Block",
              "src": "3300:40:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 918,
                      "name": "balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 785,
                      "src": "3317:8:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 920,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 919,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 913,
                      "src": "3326:6:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3317:16:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 917,
                  "id": 921,
                  "nodeType": "Return",
                  "src": "3310:23:7"
                }
              ]
            },
            "documentation": null,
            "id": 923,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 914,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 913,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 923,
                  "src": "3250:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 912,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3250:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3249:16:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 917,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 916,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 923,
                  "src": "3291:7:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 915,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3291:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3290:9:7"
            },
            "scope": 968,
            "src": "3231:109:7",
            "stateMutability": "view",
            "superFunction": 707,
            "visibility": "public"
          },
          {
            "body": {
              "id": 950,
              "nodeType": "Block",
              "src": "3419:124:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 939,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 932,
                          "name": "allowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 791,
                          "src": "3429:7:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 936,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 933,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1388,
                            "src": "3437:3:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 934,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3437:10:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3429:19:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 937,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 935,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 925,
                        "src": "3449:8:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3429:29:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 938,
                      "name": "_value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 927,
                      "src": "3461:6:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3429:38:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 940,
                  "nodeType": "ExpressionStatement",
                  "src": "3429:38:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 942,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1388,
                          "src": "3486:3:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 943,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3486:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 944,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 925,
                        "src": "3498:8:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 945,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 927,
                        "src": "3508:6:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 941,
                      "name": "Approval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 761,
                      "src": "3477:8:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 946,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3477:38:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 947,
                  "nodeType": "ExpressionStatement",
                  "src": "3477:38:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 948,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3532:4:7",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 931,
                  "id": 949,
                  "nodeType": "Return",
                  "src": "3525:11:7"
                }
              ]
            },
            "documentation": null,
            "id": 951,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 928,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 925,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 951,
                  "src": "3363:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 924,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3363:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 927,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 951,
                  "src": "3381:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 926,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3381:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3362:34:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 931,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 930,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 951,
                  "src": "3413:4:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 929,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3413:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3412:6:7"
            },
            "scope": 968,
            "src": "3346:197:7",
            "stateMutability": "nonpayable",
            "superFunction": 736,
            "visibility": "public"
          },
          {
            "body": {
              "id": 966,
              "nodeType": "Block",
              "src": "3646:49:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 960,
                        "name": "allowed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 791,
                        "src": "3663:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                          "typeString": "mapping(address => mapping(address => uint256))"
                        }
                      },
                      "id": 962,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 961,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 953,
                        "src": "3671:6:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3663:15:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 964,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 963,
                      "name": "_spender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 955,
                      "src": "3679:8:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3663:25:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 959,
                  "id": 965,
                  "nodeType": "Return",
                  "src": "3656:32:7"
                }
              ]
            },
            "documentation": null,
            "id": 967,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 956,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 953,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 967,
                  "src": "3568:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 952,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3568:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 955,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 967,
                  "src": "3584:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 954,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3584:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3567:34:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 959,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 958,
                  "name": "remaining",
                  "nodeType": "VariableDeclaration",
                  "scope": 967,
                  "src": "3627:17:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 957,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3627:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3626:19:7"
            },
            "scope": 968,
            "src": "3549:146:7",
            "stateMutability": "view",
            "superFunction": 745,
            "visibility": "public"
          }
        ],
        "scope": 969,
        "src": "1967:1731:7"
      }
    ],
    "src": "46:3652:7"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-07-04T05:35:12.137Z"
};

export {
  CanYaCoin
};

