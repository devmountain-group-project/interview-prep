import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class UnitTestExample extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to={'/submission'}><button className="backButton">Back to Submission Page</button></Link>
        </div>
          <div className="unitTestWords">
            <h2> Example of how a test file should be written. </h2>
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
      </div>
    )
  }
}




export default UnitTestExample

