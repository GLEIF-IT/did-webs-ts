# vLEI Credentials

## GLEIF Root AID

- GLEIF Internal Delegated Authority (GIDA) AID is its delagate
- GLEIF External Delegated Authority (GEDA) AID is its delegate

## Qualified vLEI Issuer (QVI) vLEI Credential

### QVI vLEI Credential Properties

- QVI vLEI Credential is issued by 2 of 5 external GLEIF Authorized Representatives (GARs)
- Each GAR can use their key for control authority of of "1/2" over the GEDA AID (any two equals or exceeds "1")
- Multi-sig
- Delegation

#### QVI AID

- Delegate of GEDA AID
- Must be controlled by at least 3 QVI Authorized Representatives (QARs) with at least 2 required to issue or revoke.

## Legal Entity (LE) vLEI Crdential

### LE vLEI Credential Properties

- LE vLEI Credential is issued by QARs using the QVI AID
- "At least 2 of 3 rule" (QARs)
- Multi-sig
- Delegation

#### LE AID

- Delegate of QVI AID
- Must be controlled by at least 3 LE Authorized Representatives (LARs) with at least 2 required to issue or revoke.

## Qualified vLEI Issuer (QVI) Authorization (AUTH) vLEI Credentials

### QVI AUTH vLEI Credential Properties

- OOR AUTH vLEI Credential
  - Issued by the LE to the QVI
  - Authorizes QVI to issue OOR vLEI credentials on behalf of the LE
- ECR AUTH vLEI Credential
  - Issued by the LE to the QVI
  - Authorizes QVI to issue ECR vLEI credentials on behalf of the LE
- "At least 2 of 3 rule" (LARs)

## Official Organizational Role (OOR) vLEI Credential

### OOR vLEI Credential Properties

- Issued by QVI to OOR person
- Single-sig
- No delegation

## Engagement Context Role (ECR) vLEI Credential

### ECR vLEI Credential Properties

- Issued by LE to ECR person
  - Only if "at least 2 of 3 rule" can be followed!
- Otherwise issued by QVI on behalf of LE
- Single-sig
- No delegation
