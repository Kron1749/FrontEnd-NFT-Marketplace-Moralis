import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { useMoralisQuery } from "react-moralis"

export default function Home() {
    const { data: listedNfts, isFetching: fetchingListedNfts } = useMoralisQuery(
        "ActiveItem", //tableName
        (query) => query.limit(10).descending("tokenId")
    )
    console.log(listedNfts)
    return <div className={styles.container}></div>
}
