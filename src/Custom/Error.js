import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <div className="mt-2 mb-4 bg-danger  rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">404 PAGES</h1>
                    <p className="col-md-8 fs-4">Please Search a valuable URl</p>
                    <Link className="btn btn-primary btn-lg" to={"/"} type="button">Back To HOME</Link>
                </div>
            </div>
        </div>
    )
}

export default Error