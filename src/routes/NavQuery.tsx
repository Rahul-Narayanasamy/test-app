import {useLocation, NavLink} from "react-router-dom"
interface Props {
    to: any;
    // props: any;
    key: any;
    children: any;
    style: any;
}
export function QueryNavLink({to, ...props}: Props) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props}></NavLink>

}