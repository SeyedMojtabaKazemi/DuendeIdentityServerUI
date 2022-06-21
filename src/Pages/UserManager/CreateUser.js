import React from 'react'
import '../../assets/bootstrap.min.css'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { createUser } from '../../Store/reducers/userSlice'


export const CreateUser = () => {

    const { register, handleSubmit, getValues, setValue, watch, control, formState: { errors } } = useForm()

    const dispatch =useDispatch()

    const submitForm = async (data) => {
        dispatch(createUser(data))
      //console.log(data)
    }

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                                <form onSubmit={handleSubmit(submitForm)}>

                                    <div className="row">
                                        <div className="col-md-6 mb-4">

                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="firstName">First Name</label>
                                                <input type="text" {...register('firstName')} className="form-control form-control-lg" />
                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4">

                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="lastName">Last Name</label>
                                                <input type="text" {...register("lastName")}  className="form-control form-control-lg" />
                                            </div>

                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="email">Email</label>
                                                <input type="email" {...register("email")} className="form-control form-control-lg" />
                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="CodeMelli">CodeMelli</label>
                                                <input type="tel" {...register("codeMelli")} className="form-control form-control-lg" />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="userName">UserName</label>
                                                <input type="text" {...register("userName")} className="form-control form-control-lg" />
                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="phoneNumber">Password</label>
                                                <input type="password" {...register("Password")} className="form-control form-control-lg" />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="mt-4 pt-2">
                                        <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
