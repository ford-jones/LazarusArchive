"use client"

export default function Login() {
    return (
        <div >
            <div >
                <a href={"api/auth/login"} style={{textDecoration: "none"}}>
                    <div style={{margin: "5%"}}>
                        <p >Log in</p>
                    </div>
                </a>
            </div>
        </div>
    )
}