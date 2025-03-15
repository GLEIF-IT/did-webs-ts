# KERI Message Types

## Key Event Messages

### `icp` - Inception

**Class:** Establishment Key Event  
**Description:** Incepts an AID and initializes its keystate.

### `rot` - Rotation

**Class:** Establishment Key Event  
**Description:** Rotates the AID's key state.

### `ixn` - Interaction

**Class:** Non-Establishment Key Event  
**Description:** Seals interaction data to the current key state.

### `dip` - Delegated Inception

**Class:** Establishment Event  
**Description:** Incepts a Delegated AID and initializes its keystate.

### `drt` - Delegated Rotation

**Class:** Establishment Key Event  
**Description:** Rotates the Delegated AID's key state.

## Receipt Messages

### `rct` - Receipt

**Class:** Receipt Message  
**Description:** Associates a proof such as signature or seal to a key event.

## Routed Messages

### `qry` - Query

**Class:** Other Message  
**Description:** Query information associated with an AID.

### `rpy` - Reply

**Class:** Other Message  
**Description:** Reply with information associated with an AID either solicited by Query or unsolicited.

### `pro` - Prod

**Class:** Other Message  
**Description:** Prod (request) information associated with a Seal.

### `bar` - Bare

**Class:** Other Event  
**Description:** Bare (response) with information associated with a Seal either solicited by Prod or unsolicited.

### `xip` - Exchange Inception

**Class:** Other Message  
**Description:** Incepts multi-exchange message transaction, the first exchange message in a transaction set.

### `exn` - Exchange

**Class:** Other Message  
**Description:** Generic exchange of information, MAY be a member of a multi-message transaction set.
