import React from 'react';

export default function ComparisonTable({ correlations }) {
    return (
        <table>
            <thead>
                <tr>
                    <td>Ticker name</td>
                    <td />
                    <td>Value</td>
                </tr>
            </thead>
            <tbody>
                {correlations.map(({ pair, value }, idx) => (
                    <tr key={idx}>
                        <td>{pair[0]}</td>
                        <td>{pair[1]}</td>
                        <td>
                            <p>{value}</p>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
