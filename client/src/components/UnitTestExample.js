import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class UnitTestExample extends Component {
  render() {
    return (
      <div>
        <div className="buttonContain">
          <Link to={'/submission'}><button className="backButton">Back to Submission Page</button></Link>
          <a href="https://jasmine.github.io/tutorials/your_first_suite" target="_blank" rel="noopener noreferrer"><button className="docsButton">More info about writing unit tests</button></a>
        </div>
          <div className="unitTestWords">
            <h2> Example tests: </h2>
          </div>
            <div className='testExample'>
              <pre>
                <code>
                    {`describe('Multiply', function() {
                      it('should be able to calculate product of two numbers', function() {
                        expect(multiply(5, 5)).toBeCloseTo(25);
                    });
                  });`}
                </code>
              </pre>
            </div>
              <div className='testExample'>
                <pre>
                  <code>
                      {`describe('Is Isogram', function() {
                        it('Should determine if a string is an Isogram', function() {
                          expect(isIsogram(true)).toEqual(true) && expect(isIsogram(false)).toEqual(false);
                        });
                      });`}
                  </code>
                </pre>
              </div>
                <div className='testExample'>
                <pre>
                  <code>
                      {`describe('To Camel Case', function() {
                        it('Should convert dashes/underscores to camel case', function() {
                          expect(toCamelCase('here_is-this_string')).toBe('hereIsThisString');
                        });
                      });`}
                  </code>
                </pre>
              </div>
      </div>
    )
  }
}




export default UnitTestExample

