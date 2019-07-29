class Solution {
    class UnionFindSet{
        public int[] parents;
        public int[] ranks;
        public UnionFindSet(int n){
            parents = new int[n];
            ranks = new int[n];
            for(int i = 0; i < n; i++){
                parents[i] = i;
            }
        }
        public int find(int num){
            if(num != parents[num])
                parents[num] = find(parents[num]);
            return parents[num];
        }
        public void union(int x, int y){
            int px = find(x);
            int py = find(y);
            if(ranks[px] > ranks[py]) {
                parents[py] = px;
                ranks[px]++;
            }else{
                parents[px] = py;
                ranks[py]++;
            }
        }
    }
    public void dfs(Set<Integer> set, int i, int[][] M){
        set.add(i);
        for(int j = 0; j < M.length;j++){
            if(M[i][j] == 1 && !set.contains(j)){
                dfs(set, j, M);
            }
        }
    }
    public int findCircleNum(int[][] M) {
        //dfs 2ms O(n^2)
        
        // int count = 0;
        // Set<Integer> set = new HashSet<>();
        // for(int i = 0;i < M.length; i++){
        //     if(!set.contains(i)){
        //         dfs(set, i, M);
        //         count++;
        //     }
        // }
        // return count;
        
//         bfs 3ms O(n^2)
        
//         int count = 0;
//         Set<Integer> set = new HashSet<>();
//         Deque<Integer> deque = new ArrayDeque<>();
        
//         for(int j = 0; j < M.length;j++){
//             if(set.contains(j)) continue;
//             deque.offer(j);
//             set.add(j);
//             while(!deque.isEmpty()){
//                 int stu = deque.poll();
//                 for(int i = 0; i < M.length; i++){
//                     if(M[stu][i] == 1){
//                         if(!set.contains(i)){
//                             deque.offer(i);
//                             set.add(i);
//                         }
//                     }
//                 }
//             }
//             count++;
//         }
//         return count;
        
        //UnionFind 2ms O(n^2)
        
        // int n = M.length;
        // UnionFindSet set = new UnionFindSet(n);
        // for(int i = 0 ; i < n; i ++){
        //     for(int j = i+1; j < n ; j++){
        //         if(M[i][j] == 1){
        //             set.union(i,j);
        //         }
        //     }
        // }
        // Set<Integer> hs = new HashSet<>();
        // for(int i = 0; i < n; i++){
        //     hs.add(set.find(i));
        // }
        // return hs.size();
    }
}

