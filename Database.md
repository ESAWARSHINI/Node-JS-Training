> Database - A Special Softwae to store data

> Why DB and not FileSystem ---> It provide Automatic Caching

### Cloud

- Renting PC

> Why Cloud is better than Owning a Server(PC)

- High initial cost to set up server
- High Maintainance cost
- Cloud provide Disaster Management
  - They keep their server rooms in places which are less prone to Disaster
  - They have Backup of all records in diff continent(Backup of indian data wiil be in Australia)
- Option to select the Required harware components in Cloud
  > NOTE: Hard Disk < SSD < RAM  
  > RAM is 10000 times faster than HD  
  > SSD id 10 to 100 times faster than HD
- OS used in Cloud ---> Linux
  - Open-Source
  - Small footprint
    - As it takes small space. Money to pay will be reduced as cloud has "pay as you go" model
  - Automation
    - Operation is done on command line
- Scaling - Feature of Renting PC

  - If Website recives lots of request from user Cloud provide **Automatic Scaling** to withstand it

  <ins>Vertical Scaling

  - Increasing the storage space

  <ins>Horizondal Scaling

  - Increasing no of PC's

  Attack done on Scaling ---> DDOS
  How to Resolve ---> By providing captcha

  ### NORMALIZATION

- Breaking a Single table into multiple table
- To avoid the anomaly

### <ins> 1NF

- Single Column should not contain more than 1 information

**_People name in height order_**
| NAME |  
|----------|
| john |  
| paul |  
| sam |

The above column give info about both name and height order

- column should be of same data type
- Should have primary key
- Repeting groups are not allowed

| ID  |  Collections  |
| --- | :-----------: |
| 1   | gold, silver  |
| 2   |  copper,gold  |
| 3   | copper,silver |

### <ins>2NF

- Each Non-Key attribute must depand on the entire primary key

### <ins>3NF

- Each Non-Key attribute should only depand on primary key and not on other columns

### <ins>4NF
