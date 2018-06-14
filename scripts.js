function table()
{
    var n = parseInt(document.getElementById('num').value);
    var m = 1;
    var h = parseInt(n/2);
    var j, k, i;
    var A = [[],[],[],[],[],[],[],[],[],[]];

    for (k=1; k<=h; k++)
    {
        for ( j=k-1; j<n-k+1; j++) 
            A[k-1][j] = m++;
        for ( j=k; j<n-k+1; j++) 
            A[j][n-k] = m++;
        for ( j=n-k-1; j>=k-1; --j) 
            A[n-k][j] = m++;
        for ( j=n-k-1; j>=k; j--) 
            A[j][k-1] = m++;
    }
    if ((n % 2)==1) 
    {
            A[h][h]=n*n;
    }

    for (i = 0; i < n; i++) {
        console.log(A[i]); 
    }
    console.table(A);
}

function sort(A, B) {
    console.log('Массив А: '+A);
    console.log('Массив В: '+B);
    var f=[0, 0, 0, 0];
    var flag=true;

    for (var i=0; i<=5; i++)
        for (var j=0; j<=5; j++){
            if (A[i]==B[j]) 
                f[j]++;
        }
    console.log('Массив f: '+f);
    for (var i=0; i<=f.length; i++)
        if (f[i]==0) flag=false;

    return flag;
}

function sortTest()
{
    var A = [11, 22, 48, 54];
    var B = [11, 48, 54, 22];
    var C = [11, 12, 48, 54];

    console.log(sort(A,B));
    console.log(sort(A,C));
 }

class PubSub{

    emit(event, data){
        var event = new CustomEvent(data);
    }

    on(event, handler){

    }
}
