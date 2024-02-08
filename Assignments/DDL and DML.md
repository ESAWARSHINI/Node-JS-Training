### <ins>Data Definition Language

- CREATE
  - To create a table

```SQL
CREATE TABLE table_name
(
col_name1 datatype,
col_name2 datatype,
col_name3 datatype
);
```

- ALTER
  - To add, delete or change columns in the existing table.

```SQL
ALTER TABLE table_name
ADD column_name datatype;
```

- TRUNCATE
  - Remove all row from the table

```SQL
TRUNCATE TABLE table_name;
```

- DROP
  - Delete the entire table structure

```SQL
DROP TABLE table_name;
```

### <ins> Data Manipulation Language

- SELECT

```sql
SELECT * FROM table_name;
```

- INSERT

```sql
INSERT INTO table_name (col1,col2,col3) VALUES (val1,val2,val3);
```

- UPDATE

```sql
UPDATE table_name SET col_name = updated_value WHERE condition;
```

- DELETE

```sql
DELETE FROM table_name WHERE condition;
```

### DATATYPE

- Integer
- Boolean
- Float - Have 3 precision point
- Double - Have 6 precision point
- Real - Have 12 precision point
- Characters(no_of_characters) - Store few characters
- Varchar(no_of_char) - Store few lines
- BLOB - To store image url

> database constraints are there for backend developers not to mess up with the database

> Front end and Back end validations are for users to not mess up with database.
