module.exports = [{
          code: `
          $description[
          # Destek talebi oluşturmak için aşağıdaki butonu kullanabilirsin.
          <:uyebildir_just1n0057:1215994133659910264> **Üye Bildir**
          - **Düzeni bozan kişiyi şikayet edebilirsin.**

          <:nerifikir_just1n0057:1215994174579544116> **Öneri/istek/öneri**
          - **Önerin veya isteğin varsa bize sunabilirsin.**
          ]
          $color[#d400ff]
         `
  },{
          name: "destek",
          code: `
          $interactionReply[**Lütfen Minecraft Veya Discord İçi Sorununuzun Butonuna Tıklayın!**;;{actionRow:{button:Minecraft Sunucu İçi Sorun!:danger:mcsw:false}{button:Discord İçi Destek!:success:dcsw:false}}{button:Üye Bildirmek!:secondary:uyebildir:false}}};;everyone;true]`
  },{
          name: "mcsw",
          code: `
          $interactionReply[**Ticket Oluşturuldu!**;;;;everyone;true]
          $newTicket[ticket-$username;<@$authorID> {newEmbed:{icon:$guildIcon[$guildID]}{description:
          **Eğer Aktif Yetkili 10 Dakika Boyunca Bakmassa Tekrar Etiketleyin!**
          
          Destek Kanalı mı?: $isTicket[$channelID]
          
          Ticket Açan: <@$authorID>**}}{actionRow:{button:Kapat:danger:button1:false}};1226917927488327862;false;Error!]`
  },{
          name: "dcsw",
          code: `
          $interactionReply[**Ticket Oluşturuldu!**;;;;everyone;true]
          $newTicket[ticket-$username;<@$authorID> {newEmbed:{icon:$guildIcon[$guildID]}{description:
          **Eğer Aktif Yetkili 10 Dakika Boyunca Bakmassa Tekrar Etiketleyin!**
          
          Destek Kanalı mı?: $isTicket[$channelID]
          
          Ticket Açan: <@$authorID>**}}{actionRow:{button:Kapat:danger:button2:false}};1226917927488327862;false;Error!]`
  },{
          name: "uyebildir",
          code: `
          $interactionReply[**Ticket Oluşturuldu!**;;;;everyone;true]
          $newTicket[ticket-$username;<@$authorID> {newEmbed:{icon:$guildIcon[$guildID]}{description:
          **Eğer Aktif Yetkili 10 Dakika Boyunca Bakmassa Tekrar Etiketleyin!**
          
          Destek Kanalı mı?: $isTicket[$channelID]
          
          Ticket Açan: <@$authorID>**}}{actionRow:{button:Kapat:danger:button3:false}};1226917927488327862;false;Error!]`
  },{
          name: "button1",
          code: `
          $closeTicket[Destek Kapatılamadı!]`
  },{
          name: "button2",
          code: `
          $closeTicket[Destek Kapatılamadı!]`
  },{
          name: "button3",
          code: `
          $closeTicket[Destek Kapatılamadı!]`
  }];


























































// Made By 💖 Just