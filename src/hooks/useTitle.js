import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Sell Own Mobil`;
    }, [title])
};

export default useTitle;