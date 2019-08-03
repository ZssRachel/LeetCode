class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        int[] visited = new int[wordList.size()];
        Set<String> begin = new HashSet<>();
        Set<String> end = new HashSet<>();
        String[] words = new String[wordList.size()];
        for(int i = 0; i < words.length; i++){
            words[i] = wordList.get(i);
        }
        begin.add(beginWord);
        if(wordList.contains(endWord))
        end.add(endWord);
        int len = beginWord.length();
        int step = 1;
        while(!begin.isEmpty() && !end.isEmpty()){
            if(begin.size() > end.size()){
                Set<String> set = begin;
                begin = end;
                end = set;
            }
            step++;
            Set<String> tmp = new HashSet<>();
            for(String cur : begin){
                for(int j = 0; j < words.length; j++){
                    if(trans(cur, words[j], len)){
                        if(end.contains(words[j])) return step;
                        else if(visited[j] == 0){
                            visited[j] = 1;
                            tmp.add(words[j]);
                        }
                    }
                }
            }
            System.out.println(Arrays.toString(begin.toArray()));
            begin = tmp;
        }
        return 0;
    }
    public boolean trans(String a, String b, int len){
        int count = 0;
        for(int i = 0; i < len; i++){
            if(a.charAt(i)!=b.charAt(i)){
                count++;
            }
            if(count > 1) return false;
        }
        if(count == 1) return true;
        else return false;
    }
}