const assert = require('assert')

describe('emag.ro', () => {
    it('ar trebui sa aiba titlul corect', () => {
        browser.url('https://emag.ro')
        const title = browser.getTitle()
        assert.strictEqual(title, 'eMAG.ro - Libertate în fiecare zi')
    })
 
	it('ce arata cand cauti ceva inexistent', () => {
		const cautator = $('#searchboxTrigger')
		cautator.setValue('laptop asus yoga');
		browser.keys("\uE007");
		const apucare = $('//*[@id="page-skin"]/div[2]/div/div[3]/div/h1/span[1]').getText()
		assert.strictEqual(apucare, '0 rezultate pentru:')
	})	

	it('should have the right title2', () => {
	    const logare = $('#my_account');
			logare.click()
			browser.pause(3000)
			const email = $('#email');
			email.setValue('testaresites8@gmail.com');
			const buton_1 = $('.gui-btn')
			buton_1.click()
			browser.pause(3000)
			const parola = $('#password')
			parola.setValue('TESTARESITES8');
			buton_1.click()

			logare.click()
			browser.pause(3000)
			const user_logat = $('.user-account-profile .title .name').getText()
			assert.strictEqual(user_logat, 'Borda Ionut')
    })
})

/*
Teste create cu webdriverio
*/

