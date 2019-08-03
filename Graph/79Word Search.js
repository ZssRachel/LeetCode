class Solution {
    public boolean exist(char[][] board, String word) {
        //dfs 4ms O(M*N*4*L)
        int row = board.length;
        int col = board[0].length;
        int[][] visited = new int[row][col];
        for(int i = 0;i < row;i++){
            for(int j = 0; j < col; j++){
                boolean result = dfs(board, word, i , j, 0, visited);
                if(result == true) return true;
            }
        }
        return false;
    }
    public boolean dfs(char[][] board, String word,int x, int y, int count, int[][] visited){
        if(count == word.length()) return true;
        if(x < 0 || y < 0 || x == board.length|| y == board[x].length) return false;
        char target = word.charAt(count);
        if(board[x][y] == target && visited[x][y] == 0){
            visited[x][y] =1;
            boolean exist = dfs(board, word, x-1, y,count+1, visited) || dfs(board, word, x+1, y,count+1, visited) || dfs(board, word, x, y-1,count+1, visited) || dfs(board, word, x, y+1,count+1, visited); 
            visited[x][y] = 0;
            return exist;
        }else{
            return false;
        }
    }
}