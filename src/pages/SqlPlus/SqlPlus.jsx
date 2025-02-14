import React from 'react';
import './SqlPlus.css';

const SqlPlus = () => {
  return (
    <div className="sqlplus-container">
      <header className="sqlplus-header">
        <nav className="sqlplus-nav"></nav>
      </header>

      <main className="sqlplus-main">
        <h1>
          🚀{' '}
          <span title="Never Forget SQL++ Again!" className="sqlplus">
            Master SQL++: Your Ultimate Command Cheat Sheet!
          </span>{' '}
          🔥
        </h1>
        <p className="sqlplus-description">
          Stuck on a command? Need a quick refresher? This page has you covered!
          For full documentation, check out
          <a
            href="https://www.w3schools.com/sql/sql_syntax.asp"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#007bff',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            {' '}
            Practice SQL*Plus Online 📖
          </a>
        </p>

        <table className="sqlplus-table">
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Commands</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>CL SCR</td>
              <td>Clears the SQL*Plus screen.</td>
            </tr>
            <tr>
              <td>02</td>
              <td>QUIT / EXIT</td>
              <td>Closes the SQL*Plus application.</td>
            </tr>
            <tr>
              <td>03</td>
              <td>DESC table_name;</td>
              <td>Displays the structure of a table.</td>
            </tr>
            <tr>
              <td>04</td>
              <td>SELECT * FROM table_name;</td>
              <td>Fetches all data from a table.</td>
            </tr>
            {/* <!-- Data Manipulation --> */}
            <tr>
              <td>05</td>
              <td>INSERT INTO table_name VALUES (...);</td>
              <td>Inserts a new row into a table.</td>
            </tr>
            <tr>
              <td>06</td>
              <td>UPDATE table_name SET column1 = value WHERE condition;</td>
              <td>Updates existing records in a table.</td>
            </tr>
            <tr>
              <td>07</td>
              <td>DELETE FROM table_name WHERE condition;</td>
              <td>Deletes specific records from a table.</td>
            </tr>
            <tr>
              <td>08</td>
              <td>TRUNCATE TABLE table_name;</td>
              <td>Removes all records from a table (without logging).</td>
            </tr>

            {/* <!-- Table Modification --> */}
            <tr>
              <td>09</td>
              <td>
                CREATE TABLE table_name (column1 datatype, column2 datatype);
              </td>
              <td>Creates a new table.</td>
            </tr>
            <tr>
              <td>10</td>
              <td>ALTER TABLE table_name ADD column_name datatype;</td>
              <td>Adds a new column to a table.</td>
            </tr>
            <tr>
              <td>11</td>
              <td>ALTER TABLE table_name DROP COLUMN column_name;</td>
              <td>Removes a column from a table.</td>
            </tr>
            <tr>
              <td>12</td>
              <td>DROP TABLE table_name;</td>
              <td>Deletes an entire table.</td>
            </tr>

            {/* <!-- Transactions --> */}
            <tr>
              <td>13</td>
              <td>COMMIT;</td>
              <td>Saves all changes made in the session.</td>
            </tr>
            <tr>
              <td>14</td>
              <td>ROLLBACK;</td>
              <td>Undoes all changes since the last commit.</td>
            </tr>
            <tr>
              <td>15</td>
              <td>SAVEPOINT sp_name;</td>
              <td>Creates a savepoint within a transaction.</td>
            </tr>
            <tr>
              <td>16</td>
              <td>ROLLBACK TO sp_name;</td>
              <td>Rolls back to a specific savepoint.</td>
            </tr>

            {/* <!-- Joins --> */}
            <tr>
              <td>17</td>
              <td>
                SELECT * FROM table1 INNER JOIN table2 ON table1.col =
                table2.col;
              </td>
              <td>Performs an inner join (only matching rows).</td>
            </tr>
            <tr>
              <td>18</td>
              <td>
                SELECT * FROM table1 LEFT JOIN table2 ON table1.col =
                table2.col;
              </td>
              <td>
                Returns all rows from table1 and matching rows from table2.
              </td>
            </tr>
            <tr>
              <td>19</td>
              <td>
                SELECT * FROM table1 RIGHT JOIN table2 ON table1.col =
                table2.col;
              </td>
              <td>
                Returns all rows from table2 and matching rows from table1.
              </td>
            </tr>
            <tr>
              <td>20</td>
              <td>
                SELECT * FROM table1 FULL OUTER JOIN table2 ON table1.col =
                table2.col;
              </td>
              <td>Returns all rows when there is a match in either table.</td>
            </tr>

            {/* <!-- Constraints --> */}
            <tr>
              <td>21</td>
              <td>
                CREATE TABLE table_name (id INT PRIMARY KEY, name VARCHAR(50));
              </td>
              <td>Defines a primary key constraint.</td>
            </tr>
            <tr>
              <td>22</td>
              <td>
                ALTER TABLE table_name ADD CONSTRAINT constraint_name UNIQUE
                (column_name);
              </td>
              <td>Adds a UNIQUE constraint to a column.</td>
            </tr>
            <tr>
              <td>23</td>
              <td>
                ALTER TABLE table_name ADD FOREIGN KEY (col) REFERENCES
                other_table(col);
              </td>
              <td>Defines a foreign key constraint.</td>
            </tr>

            {/* <!-- Indexing --> */}
            <tr>
              <td>24</td>
              <td>CREATE INDEX index_name ON table_name (column_name);</td>
              <td>Creates an index on a column.</td>
            </tr>
            <tr>
              <td>25</td>
              <td>DROP INDEX index_name;</td>
              <td>Removes an index.</td>
            </tr>

            {/* <!-- Views --> */}
            <tr>
              <td>26</td>
              <td>
                CREATE VIEW view_name AS SELECT column1, column2 FROM
                table_name;
              </td>
              <td>Creates a view based on a query.</td>
            </tr>
            <tr>
              <td>27</td>
              <td>DROP VIEW view_name;</td>
              <td>Deletes a view.</td>
            </tr>

            {/* <!-- Triggers --> */}
            <tr>
              <td>28</td>
              <td>
                CREATE TRIGGER trigger_name BEFORE INSERT ON table_name FOR EACH
                ROW BEGIN ... END;
              </td>
              <td>Defines a trigger that executes before inserting data.</td>
            </tr>
            <tr>
              <td>29</td>
              <td>DROP TRIGGER trigger_name;</td>
              <td>Deletes a trigger.</td>
            </tr>

            {/* <!-- Functions --> */}
            <tr>
              <td>30</td>
              <td>SELECT COUNT(*) FROM table_name;</td>
              <td>Counts the number of rows in a table.</td>
            </tr>
            <tr>
              <td>31</td>
              <td>SELECT MAX(column_name) FROM table_name;</td>
              <td>Finds the maximum value in a column.</td>
            </tr>
            <tr>
              <td>32</td>
              <td>SELECT MIN(column_name) FROM table_name;</td>
              <td>Finds the minimum value in a column.</td>
            </tr>
            <tr>
              <td>33</td>
              <td>SELECT AVG(column_name) FROM table_name;</td>
              <td>Finds the average value of a column.</td>
            </tr>
            <tr>
              <td>34</td>
              <td>SELECT SUM(column_name) FROM table_name;</td>
              <td>Calculates the sum of a column.</td>
            </tr>
          </tbody>
        </table>
      </main>

      <footer className="sqlplus-footer">
        &copy; All Rights Reserved By Amol🔥
      </footer>
    </div>
  );
};

export default SqlPlus;
