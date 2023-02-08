/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Messenger, MessengerInterface } from "../Messenger";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "MessageConfirmed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositInWei",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "text",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isPending",
        type: "bool",
      },
    ],
    name: "NewMessage",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "accept",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "deny",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwnMessages",
    outputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "depositInWei",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "text",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isPending",
            type: "bool",
          },
        ],
        internalType: "struct Messenger.Message[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_text",
        type: "string",
      },
      {
        internalType: "address payable",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "post",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526200004f6040518060400160405280602081526020017f48657265206973206d7920666972737420736d61727420636f6e7472616374218152506200005560201b6200096f1760201c565b620001e9565b620000f5816040516024016200006c9190620001c5565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620000f860201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156200015d57808201518184015260208101905062000140565b838111156200016d576000848401525b50505050565b6000601f19601f8301169050919050565b6000620001918262000121565b6200019d81856200012c565b9350620001af8185602086016200013d565b620001ba8162000173565b840191505092915050565b60006020820190508181036000830152620001e1818462000184565b905092915050565b6116e980620001f96000396000f3fe60806040526004361061003f5760003560e01c806313e262711461004457806319b05f491461006057806356f6628214610089578063acdb8efd146100a5575b600080fd5b61005e60048036038101906100599190610f4c565b6100d0565b005b34801561006c57600080fd5b5061008760048036038101906100829190610fde565b6102fb565b005b6100a3600480360381019061009e9190610fde565b610531565b005b3480156100b157600080fd5b506100ba610767565b6040516100c79190611217565b60405180910390f35b6101116040518060400160405280601d81526020017f257320706f73747320746578743a5b25735d20746f6b656e3a5b25645d000000815250338434610a08565b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16815260200134815260200142815260200184815260200160011515815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004019080519060200190610292929190610cf1565b5060a08201518160050160006101000a81548160ff02191690831515021790555050507f6b8f49facd5e00a27899ac1ac6cd3edeb40299f83f03eac03a0c04e7a9059096338234428660016040516102ef96959493929190611321565b60405180910390a15050565b61030481610aaa565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061035657610355611389565b5b90600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820154815260200160048201805461043f906113e7565b80601f016020809104026020016040519081016040528092919081815260200182805461046b906113e7565b80156104b85780601f1061048d576101008083540402835291602001916104b8565b820191906000526020600020905b81548152906001019060200180831161049b57829003601f168201915b505050505081526020016005820160009054906101000a900460ff16151515158152505090506104f081602001518260400151610c17565b7f2657c0f1a183b8a175f4cf6c3f6d7764c7265155fc9635682baad3cedd67d287816020015183604051610525929190611419565b60405180910390a15050565b61053a81610aaa565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061058c5761058b611389565b5b90600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482018054610675906113e7565b80601f01602080910402602001604051908101604052809291908181526020018280546106a1906113e7565b80156106ee5780601f106106c3576101008083540402835291602001916106ee565b820191906000526020600020905b8154815290600101906020018083116106d157829003601f168201915b505050505081526020016005820160009054906101000a900460ff161515151581525050905061072681600001518260400151610c17565b7f2657c0f1a183b8a175f4cf6c3f6d7764c7265155fc9635682baad3cedd67d28781602001518360405161075b929190611419565b60405180910390a15050565b60606000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561096657838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015481526020016004820180546108ba906113e7565b80601f01602080910402602001604051908101604052809291908181526020018280546108e6906113e7565b80156109335780601f1061090857610100808354040283529160200191610933565b820191906000526020600020905b81548152906001019060200180831161091657829003601f168201915b505050505081526020016005820160009054906101000a900460ff161515151581525050815260200190600101906107c7565b50505050905090565b610a05816040516024016109839190611442565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610cc8565b50565b610aa484848484604051602401610a229493929190611464565b6040516020818303038152906040527f91d1112e000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610cc8565b50505050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610afc57610afb611389565b5b906000526020600020906006020190508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9590611529565b60405180910390fd5b600115158160050160009054906101000a900460ff16151514610bf6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bed906115bb565b60405180910390fd5b60008160050160006101000a81548160ff0219169083151502179055505050565b60008273ffffffffffffffffffffffffffffffffffffffff1682604051610c3d9061160c565b60006040518083038185875af1925050503d8060008114610c7a576040519150601f19603f3d011682016040523d82523d6000602084013e610c7f565b606091505b5050905080610cc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cba90611693565b60405180910390fd5b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b828054610cfd906113e7565b90600052602060002090601f016020900481019282610d1f5760008555610d66565b82601f10610d3857805160ff1916838001178555610d66565b82800160010185558215610d66579182015b82811115610d65578251825591602001919060010190610d4a565b5b509050610d739190610d77565b5090565b5b80821115610d90576000816000905550600101610d78565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610dfb82610db2565b810181811067ffffffffffffffff82111715610e1a57610e19610dc3565b5b80604052505050565b6000610e2d610d94565b9050610e398282610df2565b919050565b600067ffffffffffffffff821115610e5957610e58610dc3565b5b610e6282610db2565b9050602081019050919050565b82818337600083830152505050565b6000610e91610e8c84610e3e565b610e23565b905082815260208101848484011115610ead57610eac610dad565b5b610eb8848285610e6f565b509392505050565b600082601f830112610ed557610ed4610da8565b5b8135610ee5848260208601610e7e565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f1982610eee565b9050919050565b610f2981610f0e565b8114610f3457600080fd5b50565b600081359050610f4681610f20565b92915050565b60008060408385031215610f6357610f62610d9e565b5b600083013567ffffffffffffffff811115610f8157610f80610da3565b5b610f8d85828601610ec0565b9250506020610f9e85828601610f37565b9150509250929050565b6000819050919050565b610fbb81610fa8565b8114610fc657600080fd5b50565b600081359050610fd881610fb2565b92915050565b600060208284031215610ff457610ff3610d9e565b5b600061100284828501610fc9565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61104081610f0e565b82525050565b61104f81610fa8565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561108f578082015181840152602081019050611074565b8381111561109e576000848401525b50505050565b60006110af82611055565b6110b98185611060565b93506110c9818560208601611071565b6110d281610db2565b840191505092915050565b60008115159050919050565b6110f2816110dd565b82525050565b600060c0830160008301516111106000860182611037565b5060208301516111236020860182611037565b5060408301516111366040860182611046565b5060608301516111496060860182611046565b506080830151848203608086015261116182826110a4565b91505060a083015161117660a08601826110e9565b508091505092915050565b600061118d83836110f8565b905092915050565b6000602082019050919050565b60006111ad8261100b565b6111b78185611016565b9350836020820285016111c985611027565b8060005b8581101561120557848403895281516111e68582611181565b94506111f183611195565b925060208a019950506001810190506111cd565b50829750879550505050505092915050565b6000602082019050818103600083015261123181846111a2565b905092915050565b600061124482610eee565b9050919050565b61125481611239565b82525050565b6000819050919050565b600061127f61127a61127584610eee565b61125a565b610eee565b9050919050565b600061129182611264565b9050919050565b60006112a382611286565b9050919050565b6112b381611298565b82525050565b6112c281610fa8565b82525050565b600082825260208201905092915050565b60006112e482611055565b6112ee81856112c8565b93506112fe818560208601611071565b61130781610db2565b840191505092915050565b61131b816110dd565b82525050565b600060c082019050611336600083018961124b565b61134360208301886112aa565b61135060408301876112b9565b61135d60608301866112b9565b818103608083015261136f81856112d9565b905061137e60a0830184611312565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806113ff57607f821691505b60208210811415611413576114126113b8565b5b50919050565b600060408201905061142e60008301856112aa565b61143b60208301846112b9565b9392505050565b6000602082019050818103600083015261145c81846112d9565b905092915050565b6000608082019050818103600083015261147e81876112d9565b905061148d602083018661124b565b818103604083015261149f81856112d9565b90506114ae60608301846112b9565b95945050505050565b7f4f6e6c79207468652072656365697665722063616e20636f6e6669726d4d657360008201527f7361676520746865206d65737361676500000000000000000000000000000000602082015250565b60006115136030836112c8565b915061151e826114b7565b604082019050919050565b6000602082019050818103600083015261154281611506565b9050919050565b7f54686973206d6573736167652068617320616c7265616479206265656e20636f60008201527f6e6669726d656400000000000000000000000000000000000000000000000000602082015250565b60006115a56027836112c8565b91506115b082611549565b604082019050919050565b600060208201905081810360008301526115d481611598565b9050919050565b600081905092915050565b50565b60006115f66000836115db565b9150611601826115e6565b600082019050919050565b6000611617826115e9565b9150819050919050565b7f4661696c656420746f20776974686472617720415641582066726f6d20636f6e60008201527f7472616374000000000000000000000000000000000000000000000000000000602082015250565b600061167d6025836112c8565b915061168882611621565b604082019050919050565b600060208201905081810360008301526116ac81611670565b905091905056fea26469706673582212200fed613757c8cd63a15cb5a795593f8ea3fca58aea80420eefc4496d75d7bbb164736f6c63430008090033";

type MessengerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MessengerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Messenger__factory extends ContractFactory {
  constructor(...args: MessengerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<Messenger> {
    return super.deploy(overrides || {}) as Promise<Messenger>;
  }
  override getDeployTransaction(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Messenger {
    return super.attach(address) as Messenger;
  }
  override connect(signer: Signer): Messenger__factory {
    return super.connect(signer) as Messenger__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MessengerInterface {
    return new utils.Interface(_abi) as MessengerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Messenger {
    return new Contract(address, _abi, signerOrProvider) as Messenger;
  }
}
