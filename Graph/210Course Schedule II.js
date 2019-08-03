class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        int[] inCount = new int[numCourses];
        List<List<Integer>> adjs = new ArrayList<>();
        buildGraph(inCount, adjs, prerequisites);
        int[] result = bfs(inCount, adjs);
        return result;
    }
    public void buildGraph(int[] inCount,List<List<Integer>> adjs, int[][] prerequisites){
        for(int i = 0; i < inCount.length; i++){
            adjs.add(new ArrayList<>());
        }
        for(int[] edge : prerequisites){
            inCount[edge[0]]++;
            adjs.get(edge[1]).add(edge[0]);
        }
    }
    public int[] bfs(int[] inCount,List<List<Integer>> adjs){
        int visited = 0;
        int[] result = new int[inCount.length];
        Queue<Integer> queue = new LinkedList<>();
        for(int i = 0; i < inCount.length; i++){
            if(inCount[i]==0) queue.offer(i);
        }
        while(!queue.isEmpty()){
            int cur = queue.poll();
            result[visited++] = cur;
            for(int to : adjs.get(cur)){
                inCount[to]--;
                if(inCount[to] == 0) queue.offer(to);
            }
        }
        if(visited==inCount.length) return result;
        else return new int[0];
    }
}