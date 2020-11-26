import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import DivLoader from 'shared/Loader/divLoader';

function CustomTable(props) {
    const {
        data,
        tableHeader,
        emptyTableMessage,
        buttons,
        getRows,
        className,
        emptyClassName,
        isLoading,
        loadingClassName,
    } = props;
    return (
        <Table className={ `${ className } responsive-table` }>
            <thead>
                <tr>
                    {
                        tableHeader && Object.keys(tableHeader).map(function(key, index) {
                            return (
                                <td key ={ index + Math.random() } style={ tableHeader[ key ]._style }>
                                    {tableHeader[ key ].label}
                                </td>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    isLoading ?
                        <tr className={ loadingClassName }>
                            <td colSpan="20">
                                <DivLoader />
                            </td>
                        </tr>
                        :
                        Object.keys(data).length > 0 ? (
                            getRows({ data, buttons })
                        ) : (
                            <tr className={ emptyClassName }>
                                <td colSpan="20">{emptyTableMessage}</td>
                            </tr>
                        )
                }
            </tbody>
        </Table>
    );
}

CustomTable.propTypes = {
    data: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
    tableHeader: PropTypes.object,
    emptyTableMessage: PropTypes.string,
    buttons: PropTypes.bool,
    getRows: PropTypes.func,
    className: PropTypes.string,
    emptyClassName: PropTypes.string,
    isLoading: PropTypes.bool,
    loadingClassName: PropTypes.string,
};

export default CustomTable;
