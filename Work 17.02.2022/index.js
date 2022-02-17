function finalGrade (exam, projects) {
    if (exam > 90 || 10 < projects) {
      return 100;
    } else if ( exam > 75 && 5 <= projects) {
      return 90;
    } else if (exam > 50 && 2 <= projects) {
      return 75;
    } else {
      return 0;
    }
 }