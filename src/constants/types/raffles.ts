export type Raffles = {
  "version": "0.0.0",
  "name": "raffles",
  "instructions": [
    {
      "name": "initProject",
      "accounts": [
        {
          "name": "key",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "project",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
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
          "name": "tokenProgram",
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
            "defined": "ProjectBumps"
          }
        },
        {
          "name": "decimals",
          "type": "u8"
        }
      ]
    },
    {
      "name": "updateRaffle",
      "accounts": [
        {
          "name": "project",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "newOwner",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collectionSize",
          "type": "u64"
        },
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "maxTickets",
          "type": "u64"
        },
        {
          "name": "maxTicketsPerParticipant",
          "type": "u64"
        },
        {
          "name": "start",
          "type": "u64"
        },
        {
          "name": "end",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initRaffle",
      "accounts": [
        {
          "name": "project",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "key",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
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
          "type": {
            "defined": "RaffleBumps"
          }
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "image",
          "type": "string"
        },
        {
          "name": "raffleType",
          "type": "u8"
        },
        {
          "name": "collectionSize",
          "type": "u64"
        },
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "maxTickets",
          "type": "u64"
        },
        {
          "name": "maxTicketsPerParticipant",
          "type": "u64"
        },
        {
          "name": "winners",
          "type": "u64"
        },
        {
          "name": "start",
          "type": "u64"
        },
        {
          "name": "end",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initRaffleNonCustodial",
      "accounts": [
        {
          "name": "project",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "key",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
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
            "defined": "RaffleBumps"
          }
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "image",
          "type": "string"
        },
        {
          "name": "raffleType",
          "type": "u8"
        },
        {
          "name": "collectionSize",
          "type": "u64"
        },
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "maxTickets",
          "type": "u64"
        },
        {
          "name": "maxTicketsPerParticipant",
          "type": "u64"
        },
        {
          "name": "winners",
          "type": "u64"
        },
        {
          "name": "start",
          "type": "u64"
        },
        {
          "name": "end",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initParticipant",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "participant",
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
      "name": "buyTickets",
      "accounts": [
        {
          "name": "project",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "participant",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
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
        }
      ],
      "args": [
        {
          "name": "tickets",
          "type": "u64"
        }
      ]
    },
    {
      "name": "selectWinner",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "participant",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "participantKey",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
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
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "selectWinnerNonCustodial",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "participant",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "participantKey",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "clock",
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
    }
  ],
  "accounts": [
    {
      "name": "project",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "key",
            "type": "publicKey"
          },
          {
            "name": "bumps",
            "type": {
              "defined": "ProjectBumps"
            }
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "decimals",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "raffle",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "project",
            "type": "publicKey"
          },
          {
            "name": "key",
            "type": "publicKey"
          },
          {
            "name": "bumps",
            "type": {
              "defined": "RaffleBumps"
            }
          },
          {
            "name": "depositAccount",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "image",
            "type": "string"
          },
          {
            "name": "raffleType",
            "type": "u8"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "collectionSize",
            "type": "u64"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "maxTickets",
            "type": "u64"
          },
          {
            "name": "maxTicketsPerParticipant",
            "type": "u64"
          },
          {
            "name": "winners",
            "type": "u64"
          },
          {
            "name": "totalWon",
            "type": "u64"
          },
          {
            "name": "start",
            "type": "u64"
          },
          {
            "name": "end",
            "type": "u64"
          },
          {
            "name": "tickets",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "participant",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "raffle",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "tickets",
            "type": "u64"
          },
          {
            "name": "isWon",
            "type": "bool"
          },
          {
            "name": "wonCount",
            "type": "u64"
          },
          {
            "name": "isDistributed",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ProjectBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "project",
            "type": "u8"
          },
          {
            "name": "vault",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "RaffleBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "raffle",
            "type": "u8"
          },
          {
            "name": "deposit",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "CustomError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "TotalWinnersLimitExceeded"
          },
          {
            "name": "MaxTicketsLimitReached"
          },
          {
            "name": "RaffleNotStartedYet"
          },
          {
            "name": "RaffleNotEndedYet"
          },
          {
            "name": "AccessDenied"
          }
        ]
      }
    }
  ],
  "metadata": {
    "address": "9hvbUZdLfqeQgSQ1JddJy3CedXwpZXVGfJngMG2j58b9"
  }
};

export const IDL: Raffles = {
  "version": "0.0.0",
  "name": "raffles",
  "instructions": [
    {
      "name": "initProject",
      "accounts": [
        {
          "name": "key",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "project",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
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
          "name": "tokenProgram",
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
            "defined": "ProjectBumps"
          }
        },
        {
          "name": "decimals",
          "type": "u8"
        }
      ]
    },
    {
      "name": "updateRaffle",
      "accounts": [
        {
          "name": "project",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "newOwner",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collectionSize",
          "type": "u64"
        },
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "maxTickets",
          "type": "u64"
        },
        {
          "name": "maxTicketsPerParticipant",
          "type": "u64"
        },
        {
          "name": "start",
          "type": "u64"
        },
        {
          "name": "end",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initRaffle",
      "accounts": [
        {
          "name": "project",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "key",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
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
          "type": {
            "defined": "RaffleBumps"
          }
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "image",
          "type": "string"
        },
        {
          "name": "raffleType",
          "type": "u8"
        },
        {
          "name": "collectionSize",
          "type": "u64"
        },
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "maxTickets",
          "type": "u64"
        },
        {
          "name": "maxTicketsPerParticipant",
          "type": "u64"
        },
        {
          "name": "winners",
          "type": "u64"
        },
        {
          "name": "start",
          "type": "u64"
        },
        {
          "name": "end",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initRaffleNonCustodial",
      "accounts": [
        {
          "name": "project",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "key",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
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
            "defined": "RaffleBumps"
          }
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "image",
          "type": "string"
        },
        {
          "name": "raffleType",
          "type": "u8"
        },
        {
          "name": "collectionSize",
          "type": "u64"
        },
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "maxTickets",
          "type": "u64"
        },
        {
          "name": "maxTicketsPerParticipant",
          "type": "u64"
        },
        {
          "name": "winners",
          "type": "u64"
        },
        {
          "name": "start",
          "type": "u64"
        },
        {
          "name": "end",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initParticipant",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "participant",
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
      "name": "buyTickets",
      "accounts": [
        {
          "name": "project",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "participant",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
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
        }
      ],
      "args": [
        {
          "name": "tickets",
          "type": "u64"
        }
      ]
    },
    {
      "name": "selectWinner",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "participant",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "participantKey",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
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
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "selectWinnerNonCustodial",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "participant",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "participantKey",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "clock",
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
    }
  ],
  "accounts": [
    {
      "name": "project",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "key",
            "type": "publicKey"
          },
          {
            "name": "bumps",
            "type": {
              "defined": "ProjectBumps"
            }
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "decimals",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "raffle",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "project",
            "type": "publicKey"
          },
          {
            "name": "key",
            "type": "publicKey"
          },
          {
            "name": "bumps",
            "type": {
              "defined": "RaffleBumps"
            }
          },
          {
            "name": "depositAccount",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "image",
            "type": "string"
          },
          {
            "name": "raffleType",
            "type": "u8"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "collectionSize",
            "type": "u64"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "maxTickets",
            "type": "u64"
          },
          {
            "name": "maxTicketsPerParticipant",
            "type": "u64"
          },
          {
            "name": "winners",
            "type": "u64"
          },
          {
            "name": "totalWon",
            "type": "u64"
          },
          {
            "name": "start",
            "type": "u64"
          },
          {
            "name": "end",
            "type": "u64"
          },
          {
            "name": "tickets",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "participant",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "raffle",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "tickets",
            "type": "u64"
          },
          {
            "name": "isWon",
            "type": "bool"
          },
          {
            "name": "wonCount",
            "type": "u64"
          },
          {
            "name": "isDistributed",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ProjectBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "project",
            "type": "u8"
          },
          {
            "name": "vault",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "RaffleBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "raffle",
            "type": "u8"
          },
          {
            "name": "deposit",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "CustomError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "TotalWinnersLimitExceeded"
          },
          {
            "name": "MaxTicketsLimitReached"
          },
          {
            "name": "RaffleNotStartedYet"
          },
          {
            "name": "RaffleNotEndedYet"
          },
          {
            "name": "AccessDenied"
          }
        ]
      }
    }
  ],
  "metadata": {
    "address": "9hvbUZdLfqeQgSQ1JddJy3CedXwpZXVGfJngMG2j58b9"
  }
};
