/*Given a binary tree, return the vertical order traversal of its nodes values.

For each node at position (X, Y), its left and right children respectively will be at positions (X-1, Y-1) and (X+1, Y-1).

Running a vertical line from X = -infinity to X = +infinity, whenever the vertical line touches some nodes, we report the values of the nodes in order from top to bottom (decreasing Y coordinates).

If two nodes have the same position, then the value of the node that is reported first is the value that is smaller.

Return an list of non-empty reports in order of X coordinate.  Every report will have a list of values of nodes.
*/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public List<List<Integer>> verticalTraversal(TreeNode root) {
        Map<String, PriorityQueue<Integer>> map = new HashMap<>();
        int y = traverse(map,root,0,0);
        List<List<Integer>> list = new ArrayList<>();
        for(int i = xmin; i <= xmax; i++){
            List<Integer> tmp = new ArrayList<>();
            for(int j = 0; j >= y;j--){
                String index = i+"+"+j;
                if(map.containsKey(index)){
                    PriorityQueue<Integer> sub = map.get(index);
                    while(!sub.isEmpty()){
                        tmp.add(sub.poll()); 
                    }
                }
            }
            list.add(tmp);
        }
        return list;
    }
    private int xmin = 1000;
    private int xmax = -1000;
    public int traverse(Map<String, PriorityQueue<Integer>> map, TreeNode node,int x, int y){
        if(node == null) {
             xmin = Math.min(xmin,x+1);
            xmax = Math.max(xmax,x-1);
            return y;
           
        };
        String index = x+"+"+y;
        if(map.containsKey(index)){
            PriorityQueue<Integer> tmp = map.get(index);
            tmp.add(node.val);
            map.put(index,tmp);
        }else{
            PriorityQueue<Integer> tmp = new PriorityQueue<>();
            tmp.add(node.val);
            map.put(index,tmp);
        }
        int y1 = traverse(map, node.left, x-1,y-1);
        int y2 = traverse(map, node.right, x+1,y-1);
        return Math.min(y1,y2);
    }
}