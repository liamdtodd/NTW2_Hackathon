import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div>
            <div>
                <h1>Uh-oh... We have an Error</h1>
                <h3>{error.statusText || error.message}</h3>
            </div>
        </div>
    )
}