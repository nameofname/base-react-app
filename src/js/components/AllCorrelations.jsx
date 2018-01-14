import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllCorrelations extends Component {
    render() {
        const { allCorrelations } = this.props;
        return (
            <div>
                <h2>Most positively correlated stocks :</h2>
                <hr />
                <table>
                    <thead>
                        <th>Ticker name</th>
                        <th />
                        <th>Value</th>
                    </thead>
                    <tbody>
                        {allCorrelations.slice(0, 10).map(({ pair, value }) => (
                            <tr>
                                <td>{pair[0]}</td>
                                <td>{pair[1]}</td>
                                <td>
                                    <p>{value}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h2>Least correlated stocks :</h2>
                <hr />
                <table>
                    <thead>
                        <th>Ticker name</th>
                        <th />
                        <th>Value</th>
                    </thead>
                    <tbody>
                        {allCorrelations.slice(0, 10).map(({ pair, value }) => (
                            <tr>
                                <td>{pair[0]}</td>
                                <td>{pair[1]}</td>
                                <td>
                                    <p>{value}</p>
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
