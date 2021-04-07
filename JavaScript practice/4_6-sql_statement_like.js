/* 
    Given a table name string and an object whose key value pairs represent column names and values for the columns
    return a SQL insert statement string
    Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables 
    into a string or to add quotations without needing to escape them.
    Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods

    SQL INSERT STATEMENT
    INSERT INTO table_name (column_1_name, column_2_name, column_3_name) VALUES (column_1_value, column_2_value, column_3_value);

    NOTE: in the VALUES section, those values should be data-type appropriate. Datatypes that should be strings include:
        - char
        - varchar
        - text
        - binary
        - dates
        - timestamps

    Technically, there is no such thing as boolean in SQL. It's TinyINT, which is 0 or 1

    EXAMPLE: 
    const table = "users";
    const insertData = { first_name: "John", last_name: "Doe", age: 25 };

    insert(table, insertData) should return:
    "INSERT INTO users (first_name, last_name, age) VALUES ('John', 'Doe', 25);"

    NOTE THE LACK OF QUOTES IN THE COLUMN NAMES AND THE APPROPRIATE COMMA PLACEMENT
*/
function insert(tableName, columnValuePairs) {
    var column = '(';
    var values = '(';
    var lastitem = Object.keys(columnValuePairs)[Object.keys(columnValuePairs).length - 1];
    for(const prop in columnValuePairs){
        var input = columnValuePairs[prop];
        if(typeof input === 'string'){
            input = `'${input}'`
        }
        if(prop == lastitem){
            column += prop + ')';
            values += input + ')';
        } else {
            column += prop + ', ';
            values += input + ', ';
        }
    }
    var result = 'INSERT INTO ' + String(tableName) + ' ' + column + ' VALUES ' + values;
    return result;
}
const table = "users";
const insertData = { first_name: "John", last_name: "Doe", age: 25 };
console.log(insert(table, insertData));