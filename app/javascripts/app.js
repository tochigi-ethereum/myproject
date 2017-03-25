function updateBalance(acct) {
        console.log('in getBalance');
	var meta;
	MetaCoin.deployed().then(function(instance) {
	  console.log('in then', instance);
	  console.log('in deployed');
	  meta = instance;
	  return meta.getBalance.call(acct);
	}).then(function(val) {
	  console.log('val is ',val.toNumber());
	  $('#bal').text(val.toNumber());
	});
}

function sendCoin(acct, to_addr, val) {
	console.log('in sendCoins');
	MetaCoin.deployed().then(function(instance) {
	  console.log('in then', instance);
	  console.log('in deployed');
	  meta = instance;
	  //console.log('bal', meta.getBalance.call(account_one, {from: account_one}));
	  return meta.sendCoin(to_addr, val, {from: acct});
	}).then(function(ret) {
	  console.log('tx returned ',ret);
	  $('#txid').text(ret['tx']);
 	  updateBalance(acct);
	});

}

$().ready( function() {
        console.log('here');
        console.log(MetaCoin.deployed());
        console.log('account0:', web3.eth.accounts[0]);
	updateBalance(web3.eth.accounts[0])
	$('#send-form').submit( function() {
		var amount = $(this).find('#amount').val();
		var address = $(this).find('#address').val();
		sendCoin(web3.eth.accounts[0], address, amount);
		return false;
	});
});
