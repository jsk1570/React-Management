import React from 'react';

class CustomerDelete extends React.Component {
    // 실제 DB에 삭제가 아닌, 체크표시로 삭제 만들기

    deleteCustomer(id) {
        // id 값으로 테이블의 n번째 삭제
        // ex) /api/customers/7 이면 테이블의 7번이 삭제
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }

    render() {
        return (
            <button onClick={(e) => {this.deleteCustomer(this.props.id)}}>삭제</button>
        )
    }

}

export default CustomerDelete;