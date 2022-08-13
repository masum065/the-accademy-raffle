export type Jungle = {
  "version": "0.0.0",
  "name": "jungle",
  "instructions": [
    {
      "name": "initializeJungle",
      "accounts": [
        {
          "name": "jungleKey",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "jungle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumps",
          "type": {
            "defined": "InitializeJungleBumps"
          }
        },
        {
          "name": "maximumWeeklyMultiplier",
          "type": "u64"
        },
        {
          "name": "weeklyMultiplier",
          "type": "u64"
        },
        {
          "name": "maximumHoldingsMultiplier",
          "type": "u64"
        },
        {
          "name": "holdingsMultiplier",
          "type": "u64"
        },
        {
          "name": "start",
          "type": "i64"
        },
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "setJungle",
      "accounts": [
        {
          "name": "jungle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "newOwner",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "maximumWeeklyMultiplier",
          "type": "u64"
        },
        {
          "name": "weeklyMultiplier",
          "type": "u64"
        },
        {
          "name": "maximumHoldingsMultiplier",
          "type": "u64"
        },
        {
          "name": "holdingsMultiplier",
          "type": "u64"
        },
        {
          "name": "start",
          "type": "i64"
        },
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "initDummy",
      "accounts": [
        {
          "name": "dummyMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dummyAnimal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "addRewardToken",
      "accounts": [
        {
          "name": "jungle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardsAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumps",
          "type": "u8"
        },
        {
          "name": "decimals",
          "type": "u8"
        },
        {
          "name": "value",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateRewardToken",
      "accounts": [
        {
          "name": "jungle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "decimals",
          "type": "u8"
        },
        {
          "name": "value",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initStaker",
      "accounts": [
        {
          "name": "jungle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumps",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initTransactionBatch",
      "accounts": [
        {
          "name": "transactionBatch",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "stakerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "stakeAnimal",
      "accounts": [
        {
          "name": "jungle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumps",
          "type": {
            "defined": "StakeAnimalBumps"
          }
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        },
        {
          "name": "emissionsPerDay",
          "type": "u64"
        },
        {
          "name": "faction",
          "type": "u64"
        }
      ]
    },
    {
      "name": "unstakeAnimal",
      "accounts": [
        {
          "name": "jungle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "animal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimStaking",
      "accounts": [
        {
          "name": "jungle",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transactionBatch",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "bulkClaim",
      "accounts": [
        {
          "name": "jungle",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal2",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal3",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal4",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal5",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal6",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal7",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal8",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal9",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal10",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal11",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal12",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal13",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal14",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal15",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal16",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal17",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal18",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal19",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal20",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transactionBatch",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "swapPoints",
      "accounts": [
        {
          "name": "jungle",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardsAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ownerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transactionBatch",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "burnPoints",
      "accounts": [
        {
          "name": "jungle",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transactionBatch",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "jungle",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "key",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "bumps",
            "type": {
              "defined": "InitializeJungleBumps"
            }
          },
          {
            "name": "escrow",
            "type": "publicKey"
          },
          {
            "name": "rewardTokens",
            "type": {
              "vec": {
                "defined": "Reward"
              }
            }
          },
          {
            "name": "animalsStaked",
            "type": "u64"
          },
          {
            "name": "maximumWeeklyMultiplier",
            "type": "u64"
          },
          {
            "name": "weeklyMultiplier",
            "type": "u64"
          },
          {
            "name": "maximumHoldingsMultiplier",
            "type": "u64"
          },
          {
            "name": "holdingsMultiplier",
            "type": "u64"
          },
          {
            "name": "start",
            "type": "i64"
          },
          {
            "name": "root",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "animal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumps",
            "type": {
              "defined": "StakeAnimalBumps"
            }
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "staker",
            "type": "publicKey"
          },
          {
            "name": "emissionsPerDay",
            "type": "u64"
          },
          {
            "name": "faction",
            "type": "u8"
          },
          {
            "name": "lastClaim",
            "type": "i64"
          },
          {
            "name": "stakedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "stakerInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumps",
            "type": "u8"
          },
          {
            "name": "staker",
            "type": "publicKey"
          },
          {
            "name": "holdings",
            "type": "u64"
          },
          {
            "name": "tokens",
            "type": "u64"
          },
          {
            "name": "transactionBatches",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "transactionBatch",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "staker",
            "type": "publicKey"
          },
          {
            "name": "transactions",
            "type": {
              "vec": {
                "defined": "Transaction"
              }
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "InitializeJungleBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "jungle",
            "type": "u8"
          },
          {
            "name": "escrow",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "Reward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumps",
            "type": "u8"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "account",
            "type": "publicKey"
          },
          {
            "name": "decimals",
            "type": "u8"
          },
          {
            "name": "value",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "StakeAnimalBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "animal",
            "type": "u8"
          },
          {
            "name": "deposit",
            "type": "u8"
          },
          {
            "name": "stakerInfo",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "Transaction",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "type": "i64"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "description",
            "type": "string"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 300,
      "name": "InvalidMultiplier",
      "msg": "Invalid multiplier, must be greater than 10000"
    },
    {
      "code": 301,
      "name": "TooEarly",
      "msg": "Too early to stake"
    },
    {
      "code": 302,
      "name": "InvalidProof",
      "msg": "Merkle proof is invalid"
    },
    {
      "code": 303,
      "name": "InvalidStaker",
      "msg": "Invalid Staker"
    },
    {
      "code": 304,
      "name": "InvalidStakerInfo",
      "msg": "Invalid Staker Info"
    },
    {
      "code": 305,
      "name": "InvalidTransactionBatch",
      "msg": "Invalid Transaction Batch"
    },
    {
      "code": 306,
      "name": "InvalidRewardsCoin",
      "msg": "Invalid mint or rewards_account given. Mint & RewardsAccount must be the same as the one in the jungle"
    },
    {
      "code": 307,
      "name": "InsufficientBalance",
      "msg": "Insufficient balance"
    }
  ]
};

export const IDL: Jungle = {
  "version": "0.0.0",
  "name": "jungle",
  "instructions": [
    {
      "name": "initializeJungle",
      "accounts": [
        {
          "name": "jungleKey",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "jungle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumps",
          "type": {
            "defined": "InitializeJungleBumps"
          }
        },
        {
          "name": "maximumWeeklyMultiplier",
          "type": "u64"
        },
        {
          "name": "weeklyMultiplier",
          "type": "u64"
        },
        {
          "name": "maximumHoldingsMultiplier",
          "type": "u64"
        },
        {
          "name": "holdingsMultiplier",
          "type": "u64"
        },
        {
          "name": "start",
          "type": "i64"
        },
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "setJungle",
      "accounts": [
        {
          "name": "jungle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "newOwner",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "maximumWeeklyMultiplier",
          "type": "u64"
        },
        {
          "name": "weeklyMultiplier",
          "type": "u64"
        },
        {
          "name": "maximumHoldingsMultiplier",
          "type": "u64"
        },
        {
          "name": "holdingsMultiplier",
          "type": "u64"
        },
        {
          "name": "start",
          "type": "i64"
        },
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "initDummy",
      "accounts": [
        {
          "name": "dummyMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dummyAnimal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "addRewardToken",
      "accounts": [
        {
          "name": "jungle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardsAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumps",
          "type": "u8"
        },
        {
          "name": "decimals",
          "type": "u8"
        },
        {
          "name": "value",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateRewardToken",
      "accounts": [
        {
          "name": "jungle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "decimals",
          "type": "u8"
        },
        {
          "name": "value",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initStaker",
      "accounts": [
        {
          "name": "jungle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumps",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initTransactionBatch",
      "accounts": [
        {
          "name": "transactionBatch",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "stakerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "stakeAnimal",
      "accounts": [
        {
          "name": "jungle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumps",
          "type": {
            "defined": "StakeAnimalBumps"
          }
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        },
        {
          "name": "emissionsPerDay",
          "type": "u64"
        },
        {
          "name": "faction",
          "type": "u64"
        }
      ]
    },
    {
      "name": "unstakeAnimal",
      "accounts": [
        {
          "name": "jungle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "animal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimStaking",
      "accounts": [
        {
          "name": "jungle",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transactionBatch",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "bulkClaim",
      "accounts": [
        {
          "name": "jungle",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal2",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal3",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal4",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal5",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal6",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal7",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal8",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal9",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal10",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal11",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal12",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal13",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal14",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal15",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal16",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal17",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal18",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal19",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "animal20",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transactionBatch",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "swapPoints",
      "accounts": [
        {
          "name": "jungle",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardsAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ownerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transactionBatch",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "burnPoints",
      "accounts": [
        {
          "name": "jungle",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transactionBatch",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "jungle",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "key",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "bumps",
            "type": {
              "defined": "InitializeJungleBumps"
            }
          },
          {
            "name": "escrow",
            "type": "publicKey"
          },
          {
            "name": "rewardTokens",
            "type": {
              "vec": {
                "defined": "Reward"
              }
            }
          },
          {
            "name": "animalsStaked",
            "type": "u64"
          },
          {
            "name": "maximumWeeklyMultiplier",
            "type": "u64"
          },
          {
            "name": "weeklyMultiplier",
            "type": "u64"
          },
          {
            "name": "maximumHoldingsMultiplier",
            "type": "u64"
          },
          {
            "name": "holdingsMultiplier",
            "type": "u64"
          },
          {
            "name": "start",
            "type": "i64"
          },
          {
            "name": "root",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "animal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumps",
            "type": {
              "defined": "StakeAnimalBumps"
            }
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "staker",
            "type": "publicKey"
          },
          {
            "name": "emissionsPerDay",
            "type": "u64"
          },
          {
            "name": "faction",
            "type": "u8"
          },
          {
            "name": "lastClaim",
            "type": "i64"
          },
          {
            "name": "stakedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "stakerInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumps",
            "type": "u8"
          },
          {
            "name": "staker",
            "type": "publicKey"
          },
          {
            "name": "holdings",
            "type": "u64"
          },
          {
            "name": "tokens",
            "type": "u64"
          },
          {
            "name": "transactionBatches",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "transactionBatch",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "staker",
            "type": "publicKey"
          },
          {
            "name": "transactions",
            "type": {
              "vec": {
                "defined": "Transaction"
              }
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "InitializeJungleBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "jungle",
            "type": "u8"
          },
          {
            "name": "escrow",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "Reward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumps",
            "type": "u8"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "account",
            "type": "publicKey"
          },
          {
            "name": "decimals",
            "type": "u8"
          },
          {
            "name": "value",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "StakeAnimalBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "animal",
            "type": "u8"
          },
          {
            "name": "deposit",
            "type": "u8"
          },
          {
            "name": "stakerInfo",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "Transaction",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "type": "i64"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "description",
            "type": "string"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 300,
      "name": "InvalidMultiplier",
      "msg": "Invalid multiplier, must be greater than 10000"
    },
    {
      "code": 301,
      "name": "TooEarly",
      "msg": "Too early to stake"
    },
    {
      "code": 302,
      "name": "InvalidProof",
      "msg": "Merkle proof is invalid"
    },
    {
      "code": 303,
      "name": "InvalidStaker",
      "msg": "Invalid Staker"
    },
    {
      "code": 304,
      "name": "InvalidStakerInfo",
      "msg": "Invalid Staker Info"
    },
    {
      "code": 305,
      "name": "InvalidTransactionBatch",
      "msg": "Invalid Transaction Batch"
    },
    {
      "code": 306,
      "name": "InvalidRewardsCoin",
      "msg": "Invalid mint or rewards_account given. Mint & RewardsAccount must be the same as the one in the jungle"
    },
    {
      "code": 307,
      "name": "InsufficientBalance",
      "msg": "Insufficient balance"
    }
  ]
};
