import { useDispatch, useSelector } from "react-redux"
import useInterceptor from "./userInterceptor"

const useInitializer = () => {
    const [addTokenInterceptor] = useInterceptor()

    const { user } = useSelector((rootState) => rootState.oidc)

    const dispatch = useDispatch()

    const initialize = () => {
        if (user) {
            addTokenInterceptor(user.access_token)
            // dispatch(getAllAccessList());
            // dispatch(getAllParrotTranslations())
            // dispatch(getAllSoftwarePartsPagedFilter({
            //     SoftwarePartType: 2
            // }))
        }
    }
    return [initialize]
}
export default useInitializer
