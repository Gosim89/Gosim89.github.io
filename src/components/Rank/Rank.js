import React from 'react';

const Rank = ({name, entries}) => {
	return(
		<div className = 'white f3'>
			{`${name} , number of your entries is...`}
				<div className='f1'> 
				{entries}
				</div>
		</div>
	);
}

export default Rank;