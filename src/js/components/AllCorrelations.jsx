import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllCorrelations extends Component {
    render() {
        const { allCorrelations } = this.props;
        return (
            <div>
                <h2>Most positively correlated stock tickers :</h2>
                <hr />
                <table>
                    <thead>
                        <th />
                    </thead>
                    <tbody>
                        {allCorrelations.slice(0, 10).map(({ pair, value }) => (
                            <tr>
                                <td>{pair[0]}</td>
                                <td>{pair[1]}</td>
                                <td>
                                    <p>value: {value}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = ({ async: { allCorrelations } }) => ({
    allCorrelations
});
export default connect(mapStateToProps)(AllCorrelations);
