class GCD {
  public static void main (String [] args) {
    System.out.println(euclid(121,240));
  }
  public static int euclid(int m, int n) {
    int r = m%n;
    if(r != 0) {
      m = n;
      n = r;
      return euclid(m, n);
    }
    return n;
  }
}