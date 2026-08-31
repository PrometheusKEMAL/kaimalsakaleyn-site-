"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MoreVertical, ShieldAlert, Ban, CheckCircle, Shield, Edit, X, Save } from "lucide-react";
import { createBrowserClient } from "@supabase/ssr";
import { updateUserAdmin, createUserAdmin } from "@/app/actions/admin-users";

export default function AdminKullanicilarPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // Modal State
  const [editingUser, setEditingUser] = useState<any>(null);
  const [editForm, setEditForm] = useState({ fullName: "", email: "", password: "", role: "user" });
  
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [addForm, setAddForm] = useState({ fullName: "", email: "", password: "", role: "user" });
  
  const [isSaving, setIsSaving] = useState(false);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const fetchUsers = async () => {
    setIsLoading(true);
    let query = supabase.from("profiles").select("*").order("created_at", { ascending: false });

    if (roleFilter !== "all") {
      query = query.eq("role", roleFilter);
    }
    if (statusFilter === "active") {
      query = query.eq("is_banned", false);
    } else if (statusFilter === "blocked") {
      query = query.eq("is_banned", true);
    }

    const { data, error } = await query;
    if (data) setUsers(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [roleFilter, statusFilter]);

  const toggleBan = async (id: string, currentStatus: boolean, name: string) => {
    const action = currentStatus ? "engelini kaldırmak" : "engellemek";
    if (!window.confirm(`"${name || 'İsimsiz Kullanıcı'}" adlı kullanıcının ${action} istediğinize emin misiniz?`)) return;

    const { error } = await supabase
      .from("profiles")
      .update({ is_banned: !currentStatus })
      .eq("id", id);

    if (!error) {
      setUsers((prev) => 
        prev.map(u => u.id === id ? { ...u, is_banned: !currentStatus } : u)
      );
    } else {
      alert("İşlem sırasında bir hata oluştu: " + error.message);
    }
  };

  const handleEditClick = (user: any) => {
    setEditingUser(user);
    setEditForm({ fullName: user.full_name || "", email: user.email || "", password: "", role: user.role || "user" });
  };

  const handleSaveEdit = async () => {
    setIsSaving(true);
    
    const updateData: any = {};
    if (editForm.fullName !== editingUser.full_name) updateData.fullName = editForm.fullName;
    if (editForm.email !== editingUser.email) updateData.email = editForm.email;
    if (editForm.password) updateData.password = editForm.password;
    if (editForm.role !== editingUser.role) updateData.role = editForm.role;

    if (Object.keys(updateData).length === 0) {
      setEditingUser(null);
      setIsSaving(false);
      return;
    }

    const result = await updateUserAdmin(editingUser.id, updateData);

    if (result.success) {
      alert("Kullanıcı bilgileri başarıyla güncellendi.");
      fetchUsers(); // Refresh the list
      setEditingUser(null);
    } else {
      alert("Hata: " + result.error + "\n\nNot: Bu işlemin çalışması için .env.local dosyasında SUPABASE_SERVICE_ROLE_KEY tanımlı olmalıdır.");
    }
    
    setIsSaving(false);
  };

  // Client side search filter
  const filteredUsers = users.filter((user) => {
    const emailMatch = user.email?.toLowerCase().includes(searchQuery.toLowerCase());
    const nameMatch = user.full_name?.toLowerCase().includes(searchQuery.toLowerCase());
    return emailMatch || nameMatch;
  });

  const handleAddUser = async () => {
    if (!addForm.email || !addForm.fullName) {
      alert("Lütfen isim ve e-posta alanlarını doldurun.");
      return;
    }

    setIsSaving(true);
    const result = await createUserAdmin({
      fullName: addForm.fullName,
      email: addForm.email,
      password: addForm.password || undefined,
      role: addForm.role,
    });

    if (result.success) {
      alert("Kullanıcı başarıyla eklendi.");
      fetchUsers();
      setIsAddingUser(false);
      setAddForm({ fullName: "", email: "", password: "", role: "user" });
    } else {
      alert("Hata: " + result.error + "\n\nNot: Bu işlemin çalışması için .env.local dosyasında SUPABASE_SERVICE_ROLE_KEY tanımlı olmalıdır.");
    }
    setIsSaving(false);
  };

  return (
    <div className="space-y-8 relative">
      {/* Edit User Modal */}
      <AnimatePresence>
        {editingUser && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-card-bg border border-gold-border rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-gold-border/50 bg-black/20">
                <h3 className="font-serif text-lg text-primary-text">Kullanıcı Düzenle</h3>
                <button onClick={() => setEditingUser(null)} className="text-secondary-text hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-secondary-text mb-2">Ad Soyad</label>
                  <input 
                    type="text" 
                    value={editForm.fullName}
                    onChange={(e) => setEditForm({...editForm, fullName: e.target.value})}
                    className="w-full bg-background/50 border border-gold-border/50 rounded-md px-4 py-2 text-primary-text focus:outline-none focus:border-antique-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-secondary-text mb-2">E-posta</label>
                  <input 
                    type="email" 
                    value={editForm.email}
                    onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                    className="w-full bg-background/50 border border-gold-border/50 rounded-md px-4 py-2 text-primary-text focus:outline-none focus:border-antique-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-secondary-text mb-2">Yeni Şifre (İsteğe Bağlı)</label>
                  <input 
                    type="password" 
                    placeholder="Değiştirmek istemiyorsanız boş bırakın"
                    value={editForm.password}
                    onChange={(e) => setEditForm({...editForm, password: e.target.value})}
                    className="w-full bg-background/50 border border-gold-border/50 rounded-md px-4 py-2 text-primary-text focus:outline-none focus:border-antique-gold transition-colors placeholder:text-secondary-text/30"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-secondary-text mb-2">Rol</label>
                  <select 
                    value={editForm.role}
                    onChange={(e) => setEditForm({...editForm, role: e.target.value})}
                    className="w-full bg-background/50 border border-gold-border/50 rounded-md px-4 py-2 text-primary-text focus:outline-none focus:border-antique-gold transition-colors"
                  >
                    <option value="user">Üye</option>
                    <option value="moderator">Moderatör</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              <div className="p-6 border-t border-gold-border/50 flex justify-end gap-3 bg-black/20">
                <button 
                  onClick={() => setEditingUser(null)}
                  className="px-4 py-2 text-sm text-secondary-text hover:text-white transition-colors"
                  disabled={isSaving}
                >
                  İptal
                </button>
                <button 
                  onClick={handleSaveEdit}
                  disabled={isSaving}
                  className="btn-primary py-2 px-6 text-sm flex items-center"
                >
                  {isSaving ? "Kaydediliyor..." : <><Save className="w-4 h-4 mr-2" /> Kaydet</>}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add User Modal */}
      <AnimatePresence>
        {isAddingUser && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-card-bg border border-gold-border rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-gold-border/50 bg-black/20">
                <h3 className="font-serif text-lg text-primary-text">Yeni Kullanıcı Ekle</h3>
                <button onClick={() => setIsAddingUser(false)} className="text-secondary-text hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-secondary-text mb-2">Ad Soyad</label>
                  <input 
                    type="text" 
                    value={addForm.fullName}
                    onChange={(e) => setAddForm({...addForm, fullName: e.target.value})}
                    className="w-full bg-background/50 border border-gold-border/50 rounded-md px-4 py-2 text-primary-text focus:outline-none focus:border-antique-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-secondary-text mb-2">E-posta</label>
                  <input 
                    type="email" 
                    value={addForm.email}
                    onChange={(e) => setAddForm({...addForm, email: e.target.value})}
                    className="w-full bg-background/50 border border-gold-border/50 rounded-md px-4 py-2 text-primary-text focus:outline-none focus:border-antique-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-secondary-text mb-2">Şifre (İsteğe Bağlı)</label>
                  <input 
                    type="password" 
                    placeholder="Boş bırakılırsa rastgele oluşturulur"
                    value={addForm.password}
                    onChange={(e) => setAddForm({...addForm, password: e.target.value})}
                    className="w-full bg-background/50 border border-gold-border/50 rounded-md px-4 py-2 text-primary-text focus:outline-none focus:border-antique-gold transition-colors placeholder:text-secondary-text/30"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-secondary-text mb-2">Rol</label>
                  <select 
                    value={addForm.role}
                    onChange={(e) => setAddForm({...addForm, role: e.target.value})}
                    className="w-full bg-background/50 border border-gold-border/50 rounded-md px-4 py-2 text-primary-text focus:outline-none focus:border-antique-gold transition-colors"
                  >
                    <option value="user">Üye</option>
                    <option value="moderator">Moderatör</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              <div className="p-6 border-t border-gold-border/50 flex justify-end gap-3 bg-black/20">
                <button 
                  onClick={() => setIsAddingUser(false)}
                  className="px-4 py-2 text-sm text-secondary-text hover:text-white transition-colors"
                  disabled={isSaving}
                >
                  İptal
                </button>
                <button 
                  onClick={handleAddUser}
                  disabled={isSaving}
                  className="btn-primary py-2 px-6 text-sm flex items-center"
                >
                  {isSaving ? "Ekleniyor..." : <><Save className="w-4 h-4 mr-2" /> Ekle</>}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-2xl text-primary-text mb-1">
            Kullanıcı Yönetimi
          </h1>
          <p className="text-secondary-text text-sm">
            Platforma kayıtlı tüm üyeleri görüntüleyin ve yönetin.
          </p>
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsAddingUser(true)}
          className="btn-primary py-2 px-4 flex items-center shrink-0"
        >
          Yeni Kullanıcı Ekle
        </motion.button>
      </div>

      {/* Toolbar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-card-bg p-4 rounded-button border border-gold-border"
      >
        <div className="relative w-full sm:w-96 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-text/40 group-focus-within:text-antique-gold/60 transition-colors" />
          <input
            type="text"
            placeholder="İsim veya e-posta ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-background/50 border border-transparent focus:border-antique-gold/30 rounded-md pl-10 pr-4 py-2 text-sm text-primary-text placeholder:text-secondary-text/30 focus:outline-none transition-all"
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <select 
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="bg-background/50 border border-gold-border text-secondary-text text-sm rounded-md px-3 py-2 focus:outline-none focus:border-antique-gold/40 w-full sm:w-auto"
          >
            <option value="all">Tüm Roller</option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderatör</option>
            <option value="user">Üye</option>
          </select>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-background/50 border border-gold-border text-secondary-text text-sm rounded-md px-3 py-2 focus:outline-none focus:border-antique-gold/40 w-full sm:w-auto"
          >
            <option value="all">Tüm Durumlar</option>
            <option value="active">Aktif</option>
            <option value="blocked">Engelli</option>
          </select>
        </div>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="card-base overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gold-border bg-black/20">
                <th className="px-6 py-4 font-serif text-[11px] uppercase tracking-wider text-secondary-text">Kullanıcı</th>
                <th className="px-6 py-4 font-serif text-[11px] uppercase tracking-wider text-secondary-text">Rol</th>
                <th className="px-6 py-4 font-serif text-[11px] uppercase tracking-wider text-secondary-text">Durum</th>
                <th className="px-6 py-4 font-serif text-[11px] uppercase tracking-wider text-secondary-text">Kayıt Tarihi</th>
                <th className="px-6 py-4 font-serif text-[11px] uppercase tracking-wider text-secondary-text text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold-border/50">
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-secondary-text/50">
                    Kullanıcılar yükleniyor...
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-secondary-text/50">
                    Gösterilecek kullanıcı bulunamadı.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-primary-text">{user.full_name || "İsimsiz Kullanıcı"}</span>
                        <span className="text-xs text-secondary-text/70">{user.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest ${
                        user.role === "admin" ? "bg-antique-gold/10 text-antique-gold border border-antique-gold/20" : user.role === "moderator" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" : "bg-white/5 text-secondary-text border border-white/10"
                      }`}>
                        {user.role === "admin" ? <Shield className="w-3 h-3" /> : user.role === "moderator" ? <ShieldAlert className="w-3 h-3" /> : <ShieldAlert className="w-3 h-3 opacity-50" />}
                        {user.role === "admin" ? "Admin" : user.role === "moderator" ? "Moderatör" : "Üye"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest ${
                        !user.is_banned ? "bg-primary-emerald/10 text-primary-emerald border border-primary-emerald/20" : "bg-red-900/20 text-red-400 border border-red-900/30"
                      }`}>
                        {!user.is_banned ? <CheckCircle className="w-3 h-3" /> : <Ban className="w-3 h-3" />}
                        {!user.is_banned ? "Aktif" : "Engelli"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-secondary-text/80">
                      {new Date(user.created_at).toLocaleDateString("tr-TR")}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => handleEditClick(user)}
                          className="p-2 text-secondary-text hover:text-antique-gold hover:bg-antique-gold/10 rounded-md transition-colors" title="Düzenle"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        {!user.is_banned ? (
                          <button 
                            onClick={() => toggleBan(user.id, user.is_banned, user.full_name || user.email)}
                            className="p-2 text-secondary-text hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors" title="Engelle"
                          >
                            <Ban className="w-4 h-4" />
                          </button>
                        ) : (
                          <button 
                            onClick={() => toggleBan(user.id, user.is_banned, user.full_name || user.email)}
                            className="p-2 text-secondary-text hover:text-primary-emerald hover:bg-primary-emerald/10 rounded-md transition-colors" title="Engeli Kaldır"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-4 border-t border-gold-border flex items-center justify-between text-xs text-secondary-text/70">
          <span>Toplam {filteredUsers.length} kullanıcı</span>
        </div>
      </motion.div>
    </div>
  );
}
