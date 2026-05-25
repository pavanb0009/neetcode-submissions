class Solution {

    isAnagram(s, t) {
    const sSorted=s.split("").sort().join("")
    const tSorted=t.split("").sort().join("")

    if (sSorted===tSorted){
        return true
    }else{
        return false
    }

    }
}
