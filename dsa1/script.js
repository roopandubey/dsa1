


	function countPS(str)
	{
		let N = str.length;

		let cps = new Array(N);
		for(let i=0;i<N;i++)
		{
			cps[i]=new Array(N);
			for(let j=0;j<N;j++)
			{
				cps[i][j]=0;
			}
		}

		
		for (let i = 0; i < N; i++)
			cps[i][i] = 1;

		
		for (let L = 2; L <= N; L++) {
			for (let i = 0; i <= N-L; i++) {
				let k = L + i - 1;
			if (str[i] == str[k]) {
				cps[i][k] = cps[i][k - 1]
									+ cps[i + 1][k] + 1;
			}else{
				cps[i][k] = cps[i][k - 1]
									+ cps[i + 1][k]
									- cps[i + 1][k - 1];
			}
			}
		}

		
		return cps[0][N - 1];
	}
	

	let str = "abcbef";
	document.write("Total palindromic "
						+ "subsequence are : "
						+ countPS(str));
	
	
	
