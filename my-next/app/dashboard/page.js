import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1>This Is Dashboard Page</h1>
            <hr />
            <ul>
                <li>
                    &bull; <Link href="dashboard/users/Garcia/2327250026">Garcia</Link>
                </li>
                <li>
                    &bull; <Link href="dashboard/users/Felix/2327250059">Felix</Link>
                </li>
            </ul>
        </div>
    );
}
