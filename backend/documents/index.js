module.exports = (data) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Entry</title>
    </head>
    <body>
    	<style type="text/css">
    		.warranty {
    			text-align: center;
    			margin-top: 5%;
    		}
    		.content {
			    text-align: left;
			    margin-left: 30%;
			    margin-top: 50px;
			    justify-content: center;
			    font-size: 18px;
    		}
    		.content span {
    			margin-right: 15px;
    		}
    	</style>
    <div class='warranty'>
        <h1>${data.model}</h1>
        <div class="content">
        	<p><span>Model:</span> ${data.model}</p>
        	<p><span>Serial number:</span> ${data.sn}</p>
        	<p><span>Description of the warranty request:</span> ${data.war_req_des}</p>
        	<p><span>Warranty type:</span> ${data.war_type}</p>
        	<p><span>Buyer information:</span> ${data.buyer}</p>
        	<p><span>Buyer contact information:</span> ${data.contact_info}</p>
        	<p><span>Received date:</span> ${data.rec_date}</p>
        	<p><span>Received by user:</span> ${data.rec_user}</p>
        	<p><span>Returned from warranty date:</span> ${data.ret_date}</p>
        	<p><span>Description of warranty result:</span> ${data.war_res_des}</p>
        	<p><span>Service code:</span> ${data.service_code}</p>
        	<p><span>Returned to customer:</span> ${data.deliv_date}</p>
        </div>
    </div>
    </body>
    </html>
    `
}